import { AppButton } from "components/Inputs/AppButton"
import { Select } from "components/Inputs/Select"
import { VsrgSong } from "lib/Songs/VsrgSong"

import { FaPause, FaPlay } from "react-icons/fa"
import { MultipleOptionSlider, Option } from "./MultipleOptionSlider"

interface VsrgBottomProps {
    selectedSnapPoint: SnapPoint
    isPlaying: boolean
    vsrg: VsrgSong
    selectedHitObjectType: VsrgHitObjectType
    scaling: number
    togglePlay: () => void
    onSnapPointChange: (snapPoint: SnapPoint) => void
    onHitObjectTypeChange: (hitObjectType: VsrgHitObjectType) => void
    onScalingChange: (scaling: number) => void
}

export type VsrgHitObjectType = 'hold' | 'tap' | 'delete'
const options: Option<VsrgHitObjectType>[] = [
    {
        value: 'tap',
        color: 'var(--accent)',
    }, {
        value: 'hold',
        color: '#8569a9',
    }, {
        value: 'delete',
        color: 'var(--red)',
    }
]
const snapPoints: SnapPoint[] = [1, 2, 4, 8, 16]
export type SnapPoint = 1 | 2 | 4 | 8 | 16
export function VsrgBottom({ onSnapPointChange, onHitObjectTypeChange, selectedSnapPoint, isPlaying, togglePlay, selectedHitObjectType, vsrg, onScalingChange, scaling }: VsrgBottomProps) {

    return <>
        <div className="vsrg-bottom">
            <MultipleOptionSlider
                options={options}
                selected={selectedHitObjectType}
                onChange={(value: VsrgHitObjectType) => {
                    onHitObjectTypeChange(value)
                }}
            />
            <div className='vsrg-name text-ellipsis'>
                {vsrg.name}
            </div>
            <div className="flex-centered" style={{ flex: '1', padding: '0 1rem' }}>
                <input
                    type='range'
                    min={10}
                    style={{ width: '100%' }}
                    max={120}
                    value={scaling}
                    onPointerUp={(e) => {
                        // @ts-ignore
                        e.target?.blur()
                    }}
                    onChange={(e) => onScalingChange(parseInt(e.target.value))}
                />
            </div>
            <div className='flex-centered' style={{ height: '100%' }}>
                <Select
                    value={selectedSnapPoint}
                    onChange={(e) => {
                        const parsed = parseInt(e.target.value) as SnapPoint
                        onSnapPointChange(parsed)
                    }}
                    style={{ width: '8rem', height: '100%', borderRadius: '0.4rem' }}
                >
                    {snapPoints.map(snapPoint =>
                        <option key={snapPoint} value={snapPoint}>
                            Snap: 1/{snapPoint}
                        </option>
                    )}
                </Select>
                <AppButton className="vsrg-play-button flex-centered" onClick={togglePlay}>
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </AppButton>
            </div>
        </div>
    </>
}