import { useEffect, useState } from 'react'
import './Shade.css'
function Shade(props){
    const {reqShade} = props
    const [shade,setShade] = useState(true);
    useEffect(()=>{
        function demo(e){
            if(e.keyCode >= 65 && e.keyCode <= 90){
                setShade(false)
            }
        }
        function change(){
            setShade(true)
        }
        window.addEventListener('keydown', demo)
        window.addEventListener('visibilitychange',change)
        window.addEventListener('blur',()=>{
            setShade(true)
        })

        reqShade(shade)
        return ()=>{
            window.removeEventListener('keydown',demo)
            window.removeEventListener('visibilitychange',change)
        }

    },[shade])
    return (
       shade ?  <div className="Shade" ><span>按下任意键开始</span></div> : null
    )
}

export default Shade