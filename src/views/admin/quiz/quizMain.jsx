import React, { useState, useEffect } from "react";
import "assets/css/quiz.css";
import QuesCard from "./components/QuesCard";
import {  Link, useLocation } from "react-router-dom";
import Submit from "./components/Submit";
function QuizMain() {
  const location = useLocation();
  const [second, setSecond] = useState(5);
  const [checkSubmit, setCheckSubmit] = useState(true);
  useEffect(() => {
    if (second > 0) {
      setTimeout(() => setSecond(second - 1), 1000);
    } else {
      setSecond(0);
      setCheckSubmit(true);
    }
  });
  var hr = Math.floor(second / (60 * 60));
  var min = Math.floor((second - hr * 60 * 60) / 60);
  var sec = Math.floor(second - hr * 60 * 60 - min * 60);
  return (
    <div>
      {
        !checkSubmit ? <div>
        <div style={{ height: "100px" }}></div>
        <QuesCard />
        <QuesCard />
        <QuesCard />
        <QuesCard />
        <QuesCard />
        <div style={{ height: "100px" }}></div>
        <div className="quizBottom">
          <h1>
            {/* {`${hr} : ${min} : ${sec}`} */}
            {hr < 10 ? `0${hr}` : hr}:{min < 10 ? `0${min}` : min}:
            {sec < 10 ? `0${sec}` : sec}
          </h1>
          <button className="button-61" onClick={()=>{
            setCheckSubmit(true);
          }}>Submit</button>
        </div>
      </div>:
      <Submit/>
      }
      
    </div>
  );
}

export default QuizMain;
