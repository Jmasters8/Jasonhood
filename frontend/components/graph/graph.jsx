import React from 'react';
import {Line}  from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';
import { fetchStock } from '../../actions/stocks';
import Moment from 'react-moment';

import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";

class Graph extends React.Component {
  constructor(props) {
    super(props);

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
        />
        
      </div>
    )
  }
}

export default Graph;