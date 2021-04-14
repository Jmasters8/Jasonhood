import React from 'react';
import {Line}  from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';
import { fetchStock } from '../../actions/stocks';
import {moment} from 'react-moment';

import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";
import { render } from 'react-dom';
import { format, parseISO, subDays } from "date-fns";

class GraphTwo extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    // console.log(this.props.data)
     
    function getTime(unixTime) {
      let date = new Date(unixTime * 1000);
      let hours = date.getHours();
      hours = ((hours + 11) % 12 + 1);
      let minutes = "0" + date.getMinutes();
      // let seconds = "0" + date.getSeconds();
      let formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }
  
    let data = [];

    // for (let i = 0; i < this.props.data['o'].length; i++) {
    //   data.push({value: this.props.data['o'][i], date: getTime(this.props.data['t'][i])})
    // }

    for (let i = 0; i < this.props.data['o'].length; i++) {
      if (i < 72) {
        data.push({price: this.props.data['o'][i], date: getTime(this.props.data['t'][i]) + "AM"})
      } else {
        data.push({price: this.props.data['o'][i], date: getTime(this.props.data['t'][i]) + "PM"})
      }
    }
    

    return (
      <div className="main-graph-1">
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart data={data}>
            <Area dataKey="price" stroke="#00C805" strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" domain={[this.props.data['c'][0], this.props.data['c'][this.props.data[this.props.data.length - 1]]]} hide/>
            <Tooltip content={<CustomToolTip />} position={{ y: -20 }}/>
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

function CustomToolTip({active, payload, label}) {
  if (active) {
    return (
    <div className="tooltip">
      <h4>{label}</h4>
    </div>
    )
  }
  return null;
}

export default GraphTwo;