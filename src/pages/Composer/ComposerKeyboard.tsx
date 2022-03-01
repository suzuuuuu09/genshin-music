import ComposerNote from "./Components/ComposerNote"
import { Column, getNoteText, NoteNameTypes } from 'lib/Utils'
import MultiSwitch from "./Components/MultiSwitch"
import { LAYOUT_IMAGES, LAYERS_INDEXES, PitchesType } from "appConfig"
import { TempoChangers } from "lib/Utils"
import { ThemeStore } from "stores/ThemeStore"
import Instrument from "lib/Instrument"


interface ComposerKeyboardProps{
    data: {
        keyboard: Instrument,
        currentColumn: Column, 
        layer: number, 
        pitch: PitchesType, 
        isPlaying: boolean, 
        noteNameType: NoteNameTypes
    },
    functions: {
        handleClick: () => void
        handleTempoChanger: (tempoChanger: typeof TempoChangers[number]) => void
        changeLayer: () => void
    }
}

export default function ComposerKeyboard({ data, functions }: ComposerKeyboardProps) {
    let hiddenSideMenu = data.isPlaying ? " hidden" : ""
    let keyboardClass = "keyboard"
    if (data.keyboard.layout.length === 15) keyboardClass += " keyboard-5"
    if (data.keyboard.layout.length === 8) keyboardClass += " keyboard-4"
    return <div>
        <div className={keyboardClass}>
            {data.keyboard.layout.length === 0 ? <div className="loading">Loading...</div> : null}
            {data.keyboard.layout.map((note, i) => {
                let index = -1
                let noteText = ""
                let noteImage = ""
                try {
                    index = data.currentColumn.notes.findIndex((e) => e.index === i)
                    //@ts-ignore
                    noteImage = LAYOUT_IMAGES[data.keyboard.layout.length][note.index]
                    noteText = getNoteText(data.noteNameType, note.index, data.pitch, data.keyboard.layout.length as 8 | 15 | 21)
                } catch (e) { }
                return <ComposerNote
                    key={note.index}
                    layers={index >= 0 ? data.currentColumn.notes[index].layer : "000"}
                    data={note}
                    noteText={noteText}
                    instrument={data.keyboard.instrumentName}
                    //@ts-ignore
                    noteImage={noteImage}
                    clickAction={functions.handleClick}
                />
            })}
        </div>
        <div className={"bottom-right-wrapper" + hiddenSideMenu}>
            <div className={"layer-buttons-wrapper"}>
                <div className="bottom-right-text">
                    Layer
                </div>
                <MultiSwitch
                    buttonsClass="layer-button"
                    options={LAYERS_INDEXES}
                    onSelect={functions.changeLayer}
                    selected={data.layer}
                />
            </div>
            <div className="tempo-changers-wrapper">
                <div className="bottom-right-text">
                    Tempo
                </div>
                {TempoChangers.map((tempoChanger) => {
                    return <button
                        key={tempoChanger.id}
                        onClick={() => functions.handleTempoChanger(tempoChanger)}
                        style={tempoChanger.changer === 1 
                            ? {
                                backgroundColor: ThemeStore.get('primary').toString(),
                                color: ThemeStore.getText('primary').toString()
                            }
                            : {backgroundColor: "#" + tempoChanger.color.toString(16)}
                        }
                    >
                        {tempoChanger.text}
                    </button>
                })}
            </div>
        </div>
    </div>
}