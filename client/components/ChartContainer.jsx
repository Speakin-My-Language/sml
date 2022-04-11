import React, { Component } from "react";
import Chart from "react-google-charts";

function ChartContainer(props) {
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[['language', 'bytes'], ...Object.entries(JSON.parse(props.languages))]}
        /*
          [
            [language, bytes]
            [language, bytes]
            [language, bytes]
            [language, bytes]
          ]
        */
        options={{
          title: "Language Breakdown",
          backgroundColor: 'chartreuse',
          font: 'Helvetica',
        }}
        // rootProps={{ "data-testid": "1" }}
      />
    {/* {console.log(Object.entries(JSON.parse(props.languages)))} */}
    </div>
  );
}
export default ChartContainer;
