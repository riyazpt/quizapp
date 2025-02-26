import quizcompleteImage from '../assets/quiz-complete.png'
import QUESTIONS from '../utils/questions.js'
export default function Summary({userAnswers}){
    const skippedANswers=userAnswers.filter(answer=>answer===null)
    const correctANswers=userAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0])
    const skippedANswerShare=Math.round((skippedANswers.length/userAnswers.length)*100)
    const correctANswerShare=Math.round((correctANswers.length/userAnswers.length)*100)
    const wrongAnswer=100-skippedANswerShare-correctANswerShare
   return  <div id="summary">
        <img src={quizcompleteImage}/>
        <h2>Quiz completed</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{skippedANswerShare}%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{correctANswerShare}%</span>
                <span className='text'>Correctly answered</span>
            </p><p>
                <span className='number'>{wrongAnswer}%</span>
                <span className='text'>Incorrectly answered</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer,index)=>{
                let cssClass='user-answer'
                if(answer===null){
                    cssClass+=' skipped'
                }
                else if(answer===QUESTIONS[index].answers[0]){
                     cssClass+=' correct'
                }else{
                     cssClass+=' wrong'
                }
                return  ( <li key={index}>
                <h3>{index+1}</h3>
                <p className='question'>{QUESTIONS[index].text}</p>
                <p className={cssClass}>{answer??'Skipped'}</p>
            </li>)
            })}
           
        </ol>
      </div>

}