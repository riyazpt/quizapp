import React, { useState,useCallback } from 'react'
import QUESTIONS from '../utils/questions.js'

import Questions from './Questions.jsx'
import Summary from './Summary.jsx'

function Quiz() {


    const [userAnswers,setUserAnswer]=useState([])
    const activeQuestions=userAnswers.length
    
    const quizComplete=activeQuestions===QUESTIONS.length

    const handleClick=useCallback(function handleClick(selectedAnswer) {
      
      setUserAnswer((prev)=>{
          return [...prev, selectedAnswer];
      })
    
    },[])
    const handleSkipAnswer=useCallback(()=>handleClick(null),[handleClick])
    if(quizComplete){
      return(<Summary userAnswers={userAnswers}/>)

    }
   
    
  return (
    <div id='quiz'>
     <Questions key={activeQuestions} 
     index={activeQuestions}
     onSelectAnswer={handleClick}
    
     handleSkipAnswer={handleSkipAnswer}/>
    </div>
  );
}

export default Quiz