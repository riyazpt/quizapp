import React,{useRef} from 'react'

function Answers({answers,selectedAnswer,answerState,onSelect}) {

    const shufflledAnswer=useRef()
    if(!shufflledAnswer.current){
        shufflledAnswer.current=[...answers]
        shufflledAnswer.current.sort(()=>Math.random()-0.5)
      }
  return (
    <ul id="answers">
    {shufflledAnswer.current.map((answer) => {
      const isSelected=selectedAnswer===answer
      let cssClass=''
      if(answerState==='answered'&& isSelected)
      {
        cssClass='selected'
      }
      if((answerState==='correct'||answerState==='wrong')&&isSelected){
        cssClass=answerState
      }
      return   (<li key={answer} className="answer">
      <button disabled={answerState!==''} onClick={() => onSelect(answer)} className={cssClass}>{answer}</button>
    </li>)
    }
    
    )}
  </ul>
  )
}

export default Answers