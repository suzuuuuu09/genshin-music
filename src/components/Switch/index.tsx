import './switch.css'
import { useTheme } from 'lib/hooks/useTheme'

interface SwitchProps{
    checked: boolean, 
    onChange: (change: boolean) => void,
    styleOuter?: any
}
export default function Switch({checked, onChange, styleOuter}: SwitchProps){
    const [theme] = useTheme()
    return <div className="switch-wrapper" onClick={() => onChange(!checked)} style={styleOuter || {}}>
        <div 
            className={`switch-inner ${checked ? 'switch-inner-on' : ''}`}
            style={{backgroundColor: (checked ? theme.get('accent') : theme.layer('primary',0.4)).toString()}}
        >
        </div>
    </div>
}