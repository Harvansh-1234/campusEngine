import React from 'react'
import 'assets/css/quiz.css'
function QuesCard({item, id}) {
  return (
    <div>
        <div className="question">
        <div className="question__title">
          <h1>Q.{id} {item.question}</h1>
          <div className="options">
            <div className="option">
              <input type="radio" name="option" id={`option1${id}`} />
              <label for="option1">{item.options[0].option}</label>
            </div>
            <div className="option">
              <input type="radio" name="option" id={`option2${id}`} />
              <label for="option2">{item.options[1].option}</label>
            </div>
            <div className="option">
              <input type="radio" name="option" id={`option3${id}`} />
              <label for="option3">{item.options[2].option}</label>
            </div>
            <div className="option">
              <input type="radio" name="option" id={`option4${id}`} />
              <label for="option4">{item.options[3].option}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuesCard