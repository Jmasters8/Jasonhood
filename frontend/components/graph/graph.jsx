import React from 'react';
import {Line}  from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';
import { fetchStock } from '../../actions/stocks';
import Moment from 'react-moment';

import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";

class Graph extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props)
  }

  componentDidMount() {
    // this.props.fetchStock()
  }

  render() {
    
    

    if (this.props.data === undefined) {
      return null
    }
    
    

    const data2 = [
      {x: "May 12",
      y: 14
    }, {
      x: "May 13",
      y: 15
    }, { 
      x: "May 14",
    y: 18},
  {
    x: "May 15",
    y: 20
  }]

  const dataSets = (arr1, arr2) => {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
      result.push({x: arr1[i], y: arr2[i]})
    }
    return result
  }

    return (
      

      <div className="main-graph-1">
        <Line
        data={{
          labels: ['6 AM', '9 AM', '12 PM', '3 PM'],
          datasets: [
            {
              // data: data2,
              label: 'Sales for 2020 (M)',
              data: data2,
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: '#5AC53B',
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointBackgroundColor: 'rgba(0, 0, 0, 0)',
              pointHoverBackgroundColor: "#5AC53B",
              pointHoverBorderColor: '#000000',
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            }
          ]
        }}
        options={{
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                // display: false
              }
            }],
            xAxes: [{
              type: 'time',
              time: {
                unit: "day",
                tooltipFormat: "HH "
              }
            }]
          }
        }}
        //   data={{
        // datasets: [{
        //     // data: testData(stockInfoIntervals),
        //     // data: data,
        //     data: graphData,
        //     backgroundColor: "black",
        //     borderWidth: 2,
        //     borderColor: '#5AC53B',
        //     pointBorderColor: 'rgba(0, 0, 0, 0)',
        //     pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        //     pointHoverBackgroundColor: "#5AC53B",
        //     pointHoverBorderColor: '#000000',
        //     pointHoverBorderWidth: 4,
        //     pointHoverRadius: 6,
        // }]
        //   }}
        //   options={{
        //     // maintainAspectRatio: false,
        //     legend: {
        //       display: false
        //     },
        //     tooltips: {
        //       mode: "index",
        //       intersect: false
        //     },
        //     scales: {
        //       yAxes: [{
        //           ticks: {
        //             // display: false
        //           }
        //       }],
        //       xAxes: [{
        //         ticks: {
        //           // display: false
        //           max: '2017-10-09 18:43:53',
        //           min: '2017-00-02 18:43:53'
        //         },
        //         type: "time",
        //         time: {
        //           // format: 'MM',
        //           parser: 'MM',
        //           displayFormats: { month: 'MMM YYYY' },
        //           unit: "month",
        //           // tooltipFormat: "ll"
        //         }
        //       }]
        //   }
        //   }}
        />
        
      </div>
    )
  }
}

export default Graph;




// datatsets: [
//   {
//     type: "line",
//     data: [12, 19, 3, 5, 2, 3],
//     backgroundColor: "black",
//     borderColor: "#5AC53B",
//     borderWidth: 2,
//     pointBorderColor: "rgba(0, 0, 0, 0)",
//     pointBackgroundColor: "rgba(0, 0, 0, 0)",
//     pointHoverBackgroundColor: "#5AC53B",
//     pointHoverBorderColor: "#000000",
//     pointHoverBorderWidth: 4,
//     pointHoverRadius: 6,
//   }
// ]