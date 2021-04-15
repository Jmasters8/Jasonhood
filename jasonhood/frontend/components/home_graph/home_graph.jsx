import React from 'react';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";
import { render } from 'react-dom';
import { format, parseISO, subDays } from "date-fns";

class HomeGraph extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    function getTime(unixTime) {
      let date = new Date(unixTime * 1000);
      let hours = date.getHours();
      hours = ((hours + 11) % 12 + 1);
      let minutes = "0" + date.getMinutes();
      // let seconds = "0" + date.getSeconds();
      let formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }

    let data = [{price: 10, date: 1}, {price: 11, date: 2}, {price: 15, date: 3}, {price: 13, date: 4},
                {price: 2, date: 5}, {price: 17, date: 6}, {price: 14, date: 7}, {price: 21, date: 8},
                {price: 10, date: 9}, {price: 1, date: 10}, {price: 32, date: 11}, {price: 15, date: 12},
                {price: 17, date: 13}, {price: 25, date: 14,}, {price: 20, date: 15}, {price: 28, date: 16},
                {price: 18, date: 17}, {price: 12, date: 18}, {price: 15, date: 19}, {price: 19, date: 20},
                {price: 11, date: 21}, {price: 12, date: 22}, {price: 30, date: 23}, {price: 28, date: 24},
                {price: 42, date: 25}, {price: 45, date: 26}, {price: 40, date: 27}, {price: 48, date: 28},
                {price: 50, date: 29}, {price: 58, date: 30}, {price: 51, date: 31}, {price: 60, date: 32},
                {price: 42, date: 33}, {price: 22, date: 34} ];

    // for (let i = 0; i < this.props.data['o'].length; i++) {
    //   if (i < 72) {
    //     data.push({price: this.props.data['o'][i], date: getTime(this.props.data['t'][i]) + "AM"})
    //   } else {
    //     data.push({price: this.props.data['o'][i], date: getTime(this.props.data['t'][i]) + "PM"})
    //   }
    // }

    return(
      <div className="main-graph-1">
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart data={data}>
            <Area dataKey="price" stroke="#00C805" strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" hide/>
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

export default HomeGraph;