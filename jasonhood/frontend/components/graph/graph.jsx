import React from 'react';
import {Line}  from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';
import { fetchStock } from '../../actions/stocks';
import Moment from 'react-moment';

class Graph extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props)
  }

  componentDidMount() {
    // this.props.fetchStock()
  }

  render() {
    // const stockInfoIntervals = this.props.stock['Time Series (5min)']
    // console.log(this.props.stock['Time Series (5min)'])
    // console.log(this.props.stock)

    const testData = (data) => {
      let arr = [];
      let time = '6:00'

      for (const item of Object.entries(data)) {
        // arr.push(item[1]['1. open'])
        arr.push({x: item[0], y: item[1]['1. open']})
        // console.log(item[1]['1. open'])
      }
      return arr
    }


    // const createDates = () => {
    //   let dates = [];
    //   let value= 50;

    //   for (let i = 0; i < 366; i++) {
    //     let date = new Date();
    //     date.setHours(0, 0, 0, 0);
    //     date.setDate(i);
    //     value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 10)
    //     dates.push({x: date, y: value});
    //   }
    //   setGraphData(dates)
    // }

    // console.log(testData(stockInfoIntervals))
    // const data = 
    // [{
    //   x: '2017-09-08 00:00:00',
    //   y: 12
    // }, {
    //   x: '2017-10-04 00:00:00',
    //   y: 12
    // }, {
    //   x: '2017-09-28 00:00:00',
    //   y: 5
    // }, {
    //   x: '2017-09-08 00:00:00',
    //   y: 28
    // }]

       const data = []

    const data2 = [
      {x: 1,
      y: 14
    }, {
      x: 2,
      y: 15
    }, { 
      x: 3,
    y: 18},
  {
    x: 4,
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
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              // type: 'line',
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
              type: 'linear'
              // time: {
                
              // }
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