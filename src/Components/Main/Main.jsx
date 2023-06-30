import { useEffect, useState } from 'react'
import './Main.css'
import CET4 from '@/public/dicts/CET4_T.json'

function Main({reqNum,shade}) {
    const [wordArr, setWordArr] = useState(CET4);
    const [firstWord, setFirstWord] = useState(wordArr[0]);
    const [num, setNum] = useState(0);
    const [wordNum,setWordNum] = useState(0)
    const [successInput,setSuccessInput] = useState(0);
    const [failInput,setFailInput] = useState(0);
    const mainWordArr = document.getElementsByClassName('mainWord');
    const wordSort = document.getElementsByClassName('wordSort')[0];

    //样式还原函数
    function resetMainWord() {
        const array = Array.from(mainWordArr);
        array.map((mainWord) => { mainWord.className = 'mainWord' })
        wordSort.className = 'wordSort'
    }
    function delayResetMainWord(){
        setTimeout(() => {
            const array = Array.from(mainWordArr);
            array.map((mainWord) => { mainWord.className = 'mainWord' })
            wordSort.className = 'wordSort'
        }, 1000);
    }

    //打字触发流程
    useEffect(() => {

        function keyTrigger(e) {
            if(!shade){
                if (e.keyCode >= 65 && e.keyCode <= 90) {
                    const key = String.fromCharCode(e.keyCode).toLowerCase();
                    const letter = (firstWord.name)[num].toLowerCase();
                    const firstWordLength = firstWord.name.length;
                    
                    if (key === letter) {
                        //成功
                        if(num >= firstWordLength-1){
                            setWordNum(wordNum+1);
                            setSuccessInput(successInput+1);
                            setNum(0)
                            resetMainWord()
                        }else{
                            mainWordArr[num].classList.add('successWord');
                            setSuccessInput(successInput+1);
                            setNum(num + 1);
                        }
    
                    } else {
                        //失败
                        mainWordArr[num].classList.add('failWord');
                        wordSort.classList.add('shake-effect');
                        setNum(0)
                        delayResetMainWord()
                        setFailInput(failInput+1)
                    }
                    
                }
                
            }
            
        }

        window.addEventListener('keydown', keyTrigger)

        return () => {
            window.removeEventListener('keydown', keyTrigger)
        }
    }, [num,firstWord,shade])

    useEffect(()=>{
        setFirstWord(wordArr[wordNum])
        reqNum(wordNum,successInput,failInput)
    },[wordNum,successInput])

    return (
        <div className='wordSort'>
            {
                firstWord.name.split('').map((word, index) => {
                    return <div className="mainWord" key={index}>{word}</div>
                })
            }
        </div>
    )
}
export default Main