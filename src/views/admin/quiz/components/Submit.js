import React, { useState, useEffect } from 'react'

function Submit() {
  const [marks, setMarks] = useState();
useEffect(() => {
  let x=Math.floor(Math.random() * 5) + 1;
setMarks(x);
}, []);
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div className='submitCard'>
        <h1>Submitted</h1>
        <h2> Total Marks : 5</h2>
        <h2 className={marks>=3 ? `textGreen`:'textRed'}>Obtained Marks : {marks}</h2>
        <h1 className='result'>{marks>=3 ? `Passed`:'Try Again'}</h1>
      </div>
    </div>
  )
}

export default Submit