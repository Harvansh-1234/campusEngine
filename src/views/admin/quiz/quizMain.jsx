import React, { useState, useEffect } from "react";
import "assets/css/quiz.css";
import QuesCard from "./components/QuesCard";
import {  Link, useLocation } from "react-router-dom";
import Submit from "./components/Submit";
import { getQuiz } from "service/api";
function QuizMain() {
  const location = useLocation();
  const [second, setSecond] = useState(localStorage.getItem('sd')? localStorage.getItem('sd'):500);
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [data, setData] = useState();
  const [answered, setAnswered] = useState([]);
  useEffect(() => {
    const initial = async () => {
      // var currenturl=window.location.search;
      // var currenturlsearch = new URLSearchParams(currenturl);
      // var title=currenturlsearch.get('title');
      let token = localStorage.getItem('token');
      let title = localStorage.getItem('quizName');
      let quizData= await getQuiz(token,title);
      console.log(quizData.data.data);
      setData(quizData.data.data[0].quizQuestions);

    }
    initial();
}, [])
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
        {
          data ? data.map((item,id)=>{
            return(
              <QuesCard item={item} id={id+1} setAnswered={setAnswered} answered={answered}/>
            );
          }):null
        }
        
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
      <Submit answered={answered}/>
      }
      
    </div>
  );
}

export default QuizMain;
