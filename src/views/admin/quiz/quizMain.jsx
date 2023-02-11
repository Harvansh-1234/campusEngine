import React from "react";
import "assets/css/quiz.css";
import QuesCard from "./components/QuesCard";
function quizMain() {
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <QuesCard/>
      <QuesCard/>
      <QuesCard/>
      <QuesCard/>
      <QuesCard/>
      <div className="quizBottom">
        <button className="button-61">Submit</button>
      </div>
    </div>
  );
}

export default quizMain;
