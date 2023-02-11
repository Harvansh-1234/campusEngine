import React from 'react'
import 'assets/css/quiz.css'
function QuesCard() {
  return (
    <div>
        <div className="question">
        <div className="question__title">
          <h1>Q1. What is your name?</h1>
          <div className="options">
            <div className="option">
              <input type="radio" name="option" id={`option1`} />
              <label for="option1">Option 1</label>
            </div>
            <div className="option">
              <input type="radio" name="option" id={`option2`} />
              <label for="option2">Option 2</label>
            </div>
            <div className="option">
              <input type="radio" name="option" id={`option3`} />
              <label for="option3">Option 3</label>
            </div>
            <div className="option">
              <input type="radio" name="option" id={`option4`} />
              <label for="option4">Option 4</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuesCard