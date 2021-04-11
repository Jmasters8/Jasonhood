import React from 'react';
import {Line}  from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';
import { fetchStock } from '../../actions/stocks';

class Graph extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props)
  }

  componentDidMount() {
    // this.props.fetchStock()
  }

  render() {
    const stockInfoIntervals = this.props.stock['Time Series (5min)']

    const testData = (data) => {
      let arr = [];

      for (const item of Object.entries(data)) {
        arr.push(item[1]['1. open'])
      }
      return arr
    }

    // console.log(testData(stockInfoIntervals))
    const data = 
    [{
      x: 1,
      y: 3
    }, {
      x: 2,
      y: 7
    }, {
      x: 3,
      y: 9
    }, {
      x: 4,
      y: 12
    }]
    return (
      

      <div className="main-graph-1">
        <Line
          data={{
        datasets: [{
            // data: testData(stockInfoIntervals),
            data: data,
            backgroundColor: "black",
            borderWidth: 2,
            borderColor: '#5AC53B',
            pointBorderColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 0)',
            pointHoverBackgroundColor: "#5AC53B",
            pointHoverBorderColor: '#000000',
            pointHoverBorderWidth: 4,
            pointHoverRadius: 6,
        }]
          }}
          options={{
            // maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              mode: "index",
              intersect: false
            },
            scales: {
              yAxes: [{
                  ticks: {
                    // display: false
                  }
              }],
              xAxes: [{
                ticks: {
                  display: false
                },
                type: "time",
                time: {
                  parser: "MM/DD/YY",
                  unit: "hour",
                  // tooltipFormat: "ll"
                }
              }]
          }
          }}
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