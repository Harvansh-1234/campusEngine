import React from 'react'
import 'assets/css/quiz.css'
function QuesCard({item, id,answered,setAnswered}) {
  return (
    <div>
        <div className="question">
        <div className="question__title">
          <h1>Q.{id} {item.question}</h1>
          <div className="options">
          {item.options.map((x,ID)=>{
            return(
              <div className="option">
              <input type="radio" name={`option${id}`} id={`option${id}`} onClick={()=>{
                if(answered.indexOf(id) === -1) {
               answered.push(id);
               console.log(answered);
  }
              }}/>
              <label for={`option${id}`}>{x.option}</label>
            </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuesCard