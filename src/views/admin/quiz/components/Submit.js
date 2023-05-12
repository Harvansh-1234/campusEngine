import React, { useState, useEffect } from 'react'
import { updateSkills } from '../../../../service/api';

function Submit({title ,answered}) {
  const [marks, setMarks] = useState();
  console.log();
useEffect(() => {
  const token = localStorage.getItem('token');
  const initial = async () => {
  // let x=Math.floor(Math.random()*answered.length);
  let x =9;
  if(x>=3 && x<=5){
      const updateuser = await updateSkills(token, { skill:{name:title,level:"beginner",approval:false} });
      console.log(updateuser);

  }else if(x>=6 && x<=8){
    const updateuser = await updateSkills(token, { skill:{name:title,level:"intermediate",approval:false} });
    console.log(updateuser);
  }else if(x>=9 && x<=10){
    const updateuser = await updateSkills(token, { skill:{name:title,level:"advanced",approval:false} });
    console.log(updateuser);
  }
setMarks(x);
  }
  initial();
}, []);
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div className='submitCard'>
        <h1>Submitted</h1>
        <h2> Total Marks : 5</h2>
        <h2 className={marks>=3 ? `textGreen`:'textRed'}>Obtained Marks : {marks}</h2>
        <h1 className='result'>{marks>=3 ? `Passed`:'Try Again'}</h1>
        <div>
          <h1 className='submitName' >{localStorage.getItem('quizName')}</h1>
          <h2 className='level'>(Beginner)</h2>
        </div>
      </div>

    </div>
  )
}

export default Submit