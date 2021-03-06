import React from 'react';
import Odometer from 'react-odometerjs';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, ReferenceLine} from "recharts";

class GraphTwo extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hoverTime: "",
      currentPrice: (this.props.stock.data['c'][this.props.stock.data['c'].length - 1]).toFixed(2)
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
    this.setState({currentPrice: (this.props.stock.data['c'][this.props.stock.data['c'].length - 1]).toFixed(2)});
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

    function getTime(unixTime) {
      let date = new Date(unixTime * 1000);
      let hours = date.getHours();
      hours = ((hours + 11) % 12 + 1);
      let minutes = "0" + date.getMinutes();
      let formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }
  
    let data = [];
    let currentPrice = (this.props.stock.data['c'][this.props.stock.data['c'].length - 1]).toFixed(2)
    let openPrice = this.props.stock.data['o'][0]


    for (let i = 0; i < this.props.data['c'].length; i++) {
      if (i < 66) {
        data.push({price: (this.props.data['c'][i]).toFixed(2), date: getTime(this.props.data['t'][i]) + "AM"})
      } else {
        data.push({price: (this.props.data['c'][i]).toFixed(2), date: getTime(this.props.data['t'][i]) + "PM"})
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
        <Odometer className="banana" format="(,ddd).dd" value={this.state.currentPrice}/>
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart data={data} onMouseMove={this.handleMouseHover} onTouchStart={this.handleMouseHover} onMouseLeave={this.resetHoverPrice}>
            <Area dataKey="price" stroke={`${lineColor()}`} strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" domain={[this.props.data['c'][0], this.props.data['c'][this.props.data[this.props.data.length - 1]]]} hide/>
            <Tooltip 
            content={<CustomToolTip />} cursor={{ stroke: "white", strokeWidth: 0.5}} isAnimationActive={false} offset={-40} position={{ y: -35 }} allowEscapeViewBox={{x: true, y: true}}/>
            <Tooltip />
            <ReferenceLine ifOverflow="extendDomain" y={openPrice} strokeWidth={1.5} strokeHeight={1.5} strokeDasharray="1 6" stroke="lightslategray" />
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