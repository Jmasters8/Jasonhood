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
      let dateObj = new Date(unixTime * 1000);
      let utcString = dateObj.toUTCString();
      let time = utcString.slice(-11, -7);
      return time;
    }
    // console.log(getTime(1618318800))
  
    let data = [];

    for (let i = 0; i < this.props.data['c'].length; i++) {
      data.push({value: this.props.data['c'][i], date: getTime(this.props.data['t'][i])})
    }
    // console.log(data)
    

    // const data = [];
    // for (let num = 0; num >= 0; num--) {
    //   data.push({
    //     date: subDays(new Date(), num).toISOString().substr(0, 10),
    //     value: 1 + Math.random()
    //     time: 
    //   });
    // }

    return (
      <div className="main-graph-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area dataKey="value" stroke="#00C805" strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date"/>
            <YAxis dataKey="value" type="number" domain={[this.props.data['c'][0], this.props.data['c'][this.props.data[this.props.data.length - 1]]]}/>
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default GraphTwo;