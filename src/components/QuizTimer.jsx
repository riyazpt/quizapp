import React, { useEffect,useState } from 'react'

function QuizTimer({timout,onTimeout,mode}) {
    const [remainingTime,setRemainingTime]=useState(timout)
    
  
    useEffect(()=> {
      const timer=setTimeout(onTimeout,timout)
      
      return  ()=>{
        clearTimeout(timer)
      }
    },[onTimeout,timout])
    useEffect(()=>{
      const intervel=setInterval(()=>setRemainingTime(prevtime=>prevtime-100),100)
      return ()=>{
        clearInterval(intervel)
      }

    },[])
  return (
    <progress id="question-time" className={mode} max={timout} value={remainingTime}/>
  )
}

export default QuizTimer