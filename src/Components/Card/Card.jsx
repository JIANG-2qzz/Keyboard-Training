import { useEffect, useState } from 'react';
import './Card.css'
function Card(props) {
    const { num, successInput, failInput, shade } = props
    const [startTime, setStartTime] = useState(0);
    const [pauseTime, setPauseTime] = useState(0);
    const [nowTime, setNowTime] = useState(0);
    const [closeTime, setCloseTime] = useState(0);
    // const [puase, setPause] = useState(false)
    const [time, setTime] = useState("00:00:00")
    const [firstSwitch, setFirstSwitch] = useState(true);
    useEffect(() => {
        let t = null

        const updateTimer = () => {
            const newDate = Date.now();
            const midDate = newDate - startTime - pauseTime;
            const totalSeconds = Math.floor(midDate / 1000); // 将时间戳转换为秒数
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            setTime(formattedTime);
        };

        if (!shade) {
            if (firstSwitch) {
                console.log('只有开始执行第一次')
                setStartTime(Date.now()); // 第一次切换时设置 startTime
                setFirstSwitch(false); // 将 firstSwitch 置为 false
            }
            t = setInterval(() => {
                updateTimer();
            }, 1000)
        }
        if (shade) {
            if (!firstSwitch) {
                setCloseTime(new Date())
                t = setInterval(() => {
                    setNowTime(new Date())
                }, 1000)
            }
        }
        return () => clearInterval(t);
    }, [shade, startTime])

    useEffect(() => {
        console.log(nowTime - closeTime)
        setPauseTime(nowTime - closeTime);
    }, [nowTime])
    
    return (
        <div className="card">
            <div className='cardSon'>
                <span >{time}</span>
                <div className='line'></div>
                <span>时间</span>
            </div>
            <div className='cardSon'>
                <span >{num}</span>
                <div className='line'></div>
                <span>完成个数</span>
            </div>
            <div className='cardSon'>
                <span >{successInput}</span>
                <div className='line'></div>
                <span>输入个数</span>
            </div>
            <div className='cardSon'>
                <span >{successInput - failInput}</span>
                <div className='line'></div>
                <span>正确个数</span>
            </div>
        </div>
    )
}

export default Card