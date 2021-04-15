import React from 'react';
import {Line}  from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';
import { fetchStock } from '../../actions/stocks';
import {moment} from 'react-moment';
import Odometer from 'react-odometerjs';

import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";
import { render } from 'react-dom';
import { format, parseISO, subDays } from "date-fns";

class GraphTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverTime: "",
      currentPrice: this.props.stock.data['c'][this.props.stock.data['c'].length - 1]
    }
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.resetHoverPrice = this.resetHoverPrice.bind(this);
    this.handleHoverTime = this.handleHoverTime.bind(this);
  }

  handleMouseHover(e) {
    if (e.activePayload) {
      let priceHovered = e.activePayload[0].payload.price;
      let timeHovered = e.activePayload[0].payload.time;
      this.setState({hoverTime: timeHovered});
      this.setState({currentPrice: priceHovered})
    }
  }

  resetHoverPrice() {
    this.setState({currentPrice: this.props.stock.data['c'][this.props.stock.data['c'].length - 1]});
  }

  handleHoverTime() {
    return (
      <div>
        { new Date(this.state.hoverTime * 1000).toLocaleTimeString(["en-US"], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    )
  }

  render() {

    
    // console.log(this.props)
     
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
    let currentPrice = this.props.stock.data['c'][this.props.stock.data['c'].length - 1]
    let openPrice = this.props.stock.data['o'][0]

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

    let lineColor = () => {
      if (currentPrice - openPrice >= 0) {
        return "rgb(0,200,5)"
      } else {
        return "rgb(255,80,0)"
      }
    }
    
    return (
      <div className="main-graph-1">
        <Odometer className="banana" value={this.state.currentPrice}/>
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart data={data} onMouseMove={this.handleMouseHover} onTouchStart={this.handleMouseHover} onMouseLeave={this.resetHoverPrice}>
            <Area dataKey="price" stroke={`${lineColor()}`} strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" domain={[this.props.data['c'][0], this.props.data['c'][this.props.data[this.props.data.length - 1]]]} hide/>
            <Tooltip 
            content={<CustomToolTip />} position={{ y: -20 }}/>
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