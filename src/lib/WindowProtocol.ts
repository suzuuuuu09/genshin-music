
type Ask<T, R> = {
    payload: T,
    response: R
}
type Tell<T> = {
    message: T
}


type ProtocolDescriptor = Record<string, Ask<any, any> | Tell<any>>

type ExtractEvent<T extends ProtocolDescriptor, E extends (Ask<any, any> | Tell<any>)> = Pick<T, {
    [K in keyof T]: T[K] extends E ? K : never
}[keyof T]>
type AskEvents<T extends ProtocolDescriptor> = ExtractEvent<T, Ask<any, any>>
type TellEvents<T extends ProtocolDescriptor> = ExtractEvent<T, Tell<any>>

type AskHandler<T> = T extends Ask<infer P, infer R> ? (payload: P) => Promise<R> : never
type TellHandler<T> = T extends Tell<infer P> ? (message: P) => void : never
type Payload<T> = T extends Ask<infer P, infer R> ? P : never
type AskResponse<T> = T extends Ask<infer _, infer R> ? R : never
type Message<T> = T extends Tell<infer P> ? P : never
type PendingAskRequest<T> = {
    id: number
    eventName: string
    resolve: (payload: T) => void
    reject: (error: any) => void
}
type PayloadMessage<E> = {
    eventName: E
    id: number
} & ({
    type: "ask"
    payload: any
} | {
    type: "tell"
    payload: any
} | {
    type: "response"
    result: any
} | {
    type: "error-response"
    error: any
})


export class WindowProtocol<P extends ProtocolDescriptor, A = AskEvents<P>, T = TellEvents<P>> {
    private _id = 0
    askHandlers = new Map<keyof A, AskHandler<Ask<any, any>>>()
    tellHandlers = new Map<keyof T, TellHandler<TellEvents<any>[string]>>()
    askPool = new Map<number, PendingAskRequest<any>>()
    private validDomains
    private target: Window | null = null
    constructor(validDomains: string[]) {
        this.validDomains = new Set(validDomains)
    }

    setTarget(target: Window) {
        this.target = target
    }
    init(target?: Window) {
        window.addEventListener("message", this.receive)
        this.target = target ?? null
    }
    dispose(){
        window.removeEventListener("message", this.receive)
        const pool = this.askPool.values()
        for (const pending of pool) {
            pending.reject("disposed")
        }
        this.askPool.clear()
        this.askHandlers.clear()
        this.tellHandlers.clear()
        
    }
    public registerAskHandler<K extends keyof A>(key: K, handler: AskHandler<A[K]>) {
        this.askHandlers.set(key, handler)
    }
    public registerTellHandler<K extends keyof T>(key: K, handler: TellHandler<T[K]>) {
        this.tellHandlers.set(key, handler)
    }
    public ask<K extends keyof A>(key: K, payload: Payload<A[K]>, to?: Window): Promise<AskResponse<A[K]>> {
        return new Promise((resolve, reject) => {
            this._id++
            this.askPool.set(this._id, {
                id: this._id,
                eventName: key as string,
                resolve: resolve as any,
                reject: reject as any,
            })
            const message = {
                type: "ask",
                payload,
                id: this._id,
                eventName: key,

            } satisfies PayloadMessage<keyof A | keyof T>
            this.send(message, to ?? this.target!)
        })
    }
    public tell<K extends keyof T>(key: K, message: Message<T[K]>, to?: Window) {
        const payload = {
            type: "tell",
            payload: message,
            eventName: key,
            id: this._id++
        } satisfies PayloadMessage<keyof A | keyof T>
        this.send(payload, to ?? this.target!)
    }
    private async receive(message: MessageEvent<PayloadMessage<keyof A | keyof T>>) {
        if (!this.validDomains.has(message.origin)) return
        const data = message.data
        if (data.type === "ask") {
            const handler = this.askHandlers.get(data.eventName as keyof A)
            if (!handler) return
            try {
                const result = await handler(data.payload)
                const response = {
                    type: "response",
                    result,
                    id: data.id,
                    eventName: data.eventName,
                } satisfies PayloadMessage<keyof A | keyof T>
                this.send(response, message.source!, message.origin)
            } catch (e) {
                console.error(e)
                const response = {
                    type: "error-response",
                    error: e,
                    id: data.id,
                    eventName: data.eventName,
                } satisfies PayloadMessage<keyof A | keyof T>
                this.send(response, message.source!, message.origin)
            }
        } else if (data.type === "tell") {
            const handler = this.tellHandlers.get(data.eventName as keyof T)
            if (!handler) return
            handler(data.payload)
        } else if (data.type === "response") {
            const pending = this.askPool.get(data.id)
            if (!pending) return
            this.askPool.delete(data.id)
            pending.resolve(data.result)
        } else if (data.type === "error-response") {
            const pending = this.askPool.get(data.id)
            if (!pending) return
            this.askPool.delete(data.id)
            pending.reject(data.error)
        }
    }
    private send(payload: any, to: Window | MessageEventSource, origin?: string) {
        if (to instanceof Window) {
            to.postMessage(payload, origin ?? "*")
        } else {
            to.postMessage(payload)
        }
    }
}

const domains = [
    "https://specy.github.io",
    "https://genshin-music.specy.app",
    "https://sky-music.specy.app",
]
type TestProtocol = {
    sum: Ask<{ a: number, b: number }, number>
    concat: Ask<{ a: string, b: string }, { result: string }>
    hello: Tell<string>
}
const protocol = new WindowProtocol<TestProtocol>(domains)
