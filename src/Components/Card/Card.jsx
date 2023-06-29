import { useEffect, useState } from 'react';
import './card.css'
function Card(props){
    const {} = props
    const [time,setTime] = useState("00:00:00")
    useEffect(()=>{
        const oldDate = Date.now()
        const t = setInterval(()=>{
            const newDate = Date.now()
            const midDate = newDate - oldDate;

            const totalSeconds = Math.floor(midDate / 1000); // 将时间戳转换为秒数
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            setTime(formattedTime)
        },1000)

        return  ()=>clearInterval(t);
    },[])
    
    return (
        <div className="card">
            <div className='cardSon'><span >{time}</span></div>
            <div className='cardSon'><span >num</span></div>
        </div>
    )
}

export default Card