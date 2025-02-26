import React, { useState } from 'react'
import QuizTimer from '../components/QuizTimer.jsx'
import Answers from '../components/Answers.jsx'
import QUESTIONS from '../utils/questions.js'

export default function Questions({index,onSelectAnswer,handleSkipAnswer}) {
  const [answer,setANswer]=useState({selectedAnswer:'',
    isCorrect:null
  })
  let timer=10000
  if(answer.selectedAnswer){
    timer=1000
  }
  if(answer.isCorrect!==null){
    timer=2000
  }
  function handleSelectAnswer(answer){
    setANswer({
      selectedAnswer:answer,
      isCorrect:null
    })
    setTimeout(() => {
      setANswer({
        selectedAnswer:answer,
        isCorrect:QUESTIONS[index].answers[0]===answer
      })
      setTimeout(() => {
        onSelectAnswer(answer)
      }, 2000);
    }, 1000);

  }
  let answerState=''
  if(answer.selectedAnswer&& answer.isCorrect!=null){
    answerState=answer.isCorrect?'correct':'wrong'
  }else if(answer.selectedAnswer){
    answerState='answered'

  }
  return (
    <div id="question">  
    <QuizTimer key={timer} timout={timer} onTimeout={answer.selectedAnswer===''?handleSkipAnswer:null} mode={answerState}/>
    <h2>{QUESTIONS[index].text}</h2>
   
   <Answers 
    answers={QUESTIONS[index].answers}
   answerState={answerState}
   selectedAnswer={answer.selectedAnswer}

    onSelect={handleSelectAnswer}

   /></div>
  )
}
