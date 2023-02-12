
import React from "react";
import BarChart from "components/charts/BarChart"
import LineChart from "components/charts/LineChart"
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "variables/charts"

export default function UserReports() {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>


    <div>
    <h1 style={{marginTop:"100px",fontSize:"1.5rem",fontWeight:"600",marginLeft:"20px"}}>Past Placement Records</h1>
    <div style={{width:"500px",height:"300px",marginLeft:"20px",backgroundColor:"white",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"15px",margin:"20px"}}>
          <LineChart
  chartData={lineChartDataOverallRevenue}
  chartOptions={lineChartOptionsOverallRevenue}
/>
    </div>
    </div>
    <div>
    <h1 style={{marginTop:"100px",fontSize:"1.5rem",fontWeight:"600",marginLeft:"20px"}}>Hiring Stats</h1>
    <div style={{width:"500px",height:"300px",marginLeft:"20px",backgroundColor:"white",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"15px", margin:"20px"}}>

    <BarChart
  chartData={barChartDataDailyTraffic}
  chartOptions={barChartOptionsDailyTraffic}
/>
</div>
</div>
    </div>
    </>
  );
}
