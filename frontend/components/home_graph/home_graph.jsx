import React from 'react';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";
import { render } from 'react-dom';
import { format, parseISO, subDays } from "date-fns";
import Odometer from 'react-odometerjs';
import data from '../navbar/data';

class HomeGraph extends React.Component {
  constructor(props) {
    super(props);


    if (document.getElementsByClassName("left-4-header")[0]) {
      this.state = {
        hoverTime: "",
        currentPrice: document.getElementsByClassName("left-4-header")[0].innerHTML
      }
    } else {
      this.state = {
        hoverTime: "",
        currentPrice: ""
      }
    }
    
    

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.resetHoverPrice = this.resetHoverPrice.bind(this);
    this.handleHoverTime = this.handleHoverTime.bind(this);
  }

  componentDidMount() {
    if (Object.values(this.props.stocks).length === 0) {
      return null
    } else {
      console.log(this.props.stocks)
    }
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

  resetHoverPrice() {
    this.setState({currentPrice: HomeGraph.data[HomeGraph.data.length - 1].price});
  }

  handleMouseHover(e) {
    // document.getElementsByClassName("odometer-inside")[0].style.display = "block"
    // document.getElementsByClassName("left-4-header")[0].style.display = "none"
    if (e.activePayload) {
      let priceHovered = e.activePayload[0].payload.price;
      let timeHovered = e.activePayload[0].payload.time;
      this.setState({hoverTime: timeHovered});
      this.setState({currentPrice: priceHovered})
    }
  }


  render() {
    
    let assets = Object.values(this.props.assets)
    let uniqueAssets = [];
    for (let i = 0; i < assets.length; i++) {
      let asset = assets[i].ticker
      if (!uniqueAssets.includes(asset)) {
        uniqueAssets.push(asset)
      }
    }
    
    if (Object.values(this.props.stocks).length !== uniqueAssets.length) return null
    for (let i = 0; i < Object.values(this.props.stocks).length; i++) {
      
      if (Object.values(this.props.stocks)[i].data === undefined) {
        return null
      }
    }

  
    function getTime(unixTime) {
      let date = new Date(unixTime * 1000);
      let hours = date.getHours();
      hours = ((hours + 11) % 12 + 1);
      let minutes = "0" + date.getMinutes();
      // let seconds = "0" + date.getSeconds();
      let formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }

    // let data = [{price: 10, date: '6:00 AM'}, {price: 11, date: '6:05 AM'}, {price: 15, date: '6:10 AM'}, {price: 13, date: '6:15 AM'},
    //             {price: 2, date: '6:20 AM'}, {price: 17, date: '6:25 AM'}, {price: 14, date: '6:30 AM'}, {price: 21, date: '6:35 AM'},
    //             {price: 10, date: '6:40 AM'}, {price: 1, date: '6:45 AM'}, {price: 32, date: '6:50 AM'}, {price: 15, date: '6:55 AM'},
    //             {price: 17, date: '7:00 AM'}, {price: 25, date: '7:05 AM'}, {price: 20, date: '7:10 AM'}, {price: 28, date: '7:15 AM'},
    //             {price: 18, date: '7:20 AM'}, {price: 12, date: '7:25 AM'}, {price: 15, date: '7:30 AM'}, {price: 19, date: '7:35 AM'},
    //             {price: 11, date: '7:40 AM'}, {price: 12, date: '7:45 AM'}, {price: 30, date: '7:50 AM'}, {price: 28, date: '7:55 AM'},
    //             {price: 42, date: '8:00 AM'}, {price: 45, date: '8:05 AM'}, {price: 40, date: '8:10 AM'}, {price: 48, date: '8:15 AM'},
    //             {price: 50, date: '8:20 AM'}, {price: 58, date: '8:25 AM'}, {price: 51, date: '8:30 AM'}, {price: 60, date: '8:35 AM'},
    //             {price: 42, date: '8:40 AM'}, {price: 22, date: '8:45 AM'}, {price: 38, date: '8:50 AM'}, {price: 70, date: '8:55 AM'},
    //             {price: 78, date: '9:00 AM'}, {price: 58, date: '9:05 AM'}, {price: 51, date: '9:10 AM'}, {price: 60, date: '9:15 AM'},
    //             {price: 42, date: '9:20 AM'}, {price: 22, date: '9:25 AM'}, {price: 38, date: '9:30 AM'}, {price: 70, date: '9:45 AM'},
    //             {price: 78, date: '9:50 AM'}, {price: 65, date: '9:55 AM'}, {price: 69, date: '10:00 AM'}, {price: 75, date: '10:05 AM'},
    //             {price: 80, date: '10:15 AM'}, {price: 88, date: '10:20 AM'}, {price: 98, date: '10:25 AM'}, {price: 100, date: '10:30 AM'} ];

    let stocks = this.props.stocks
    let data2 = []

    let getData = () => {
      let assets = Object.values(this.props.assets);
      

      for (let i = 0; i < stocks[assets[0].ticker].data.c.length - 1; i++) {
        let time;
        if (i < 72) {
          time = getTime(stocks[assets[0].ticker].data.t[i]) + "AM"
        } else {
          time = getTime(stocks[assets[0].ticker].data.t[i]) + "PM"
        }
        
        let dataPoint = {
          price: 0,
          date: time
        }
        
        for (let j = 0; j < uniqueAssets.length; j++) {
          let ticker = uniqueAssets[j];
          let price = stocks[ticker].data.c[i]
          if (i >= stocks[ticker].data.c.length) continue

          for (let k = 0; k < assets.length; k++) {
            let asset = assets[k];
            

            if (asset.ticker === ticker) {
              dataPoint.price += (asset.amount * price)
            }
          }
        }
        dataPoint.price = parseInt(dataPoint.price.toFixed(2))
        data2.push(dataPoint)
      }
      
    }

    if (data2.length === 0) {
      getData()
    }

    HomeGraph.data = data2

    let test = () => {
      if (this.state.currentPrice === "") {
        return data2[data2.length - 1].price
      } else {
        return this.state.currentPrice
      }
    }
    
    return(
      <div className="main-graph-1">
        <span className="home-graph-money">$</span><Odometer className="banana" value={test()}/>
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart data={data2} onMouseMove={this.handleMouseHover} onTouchStart={this.handleMouseHover} onMouseLeave={this.resetHoverPrice}>
            <Area dataKey="price" stroke="#00C805" strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" domain={data2[0].price, data2[data2.length - 1].price} hide/>
            {/* <Tooltip content={<CustomToolTip />} position={{ y: -20 }}/>
            <Tooltip /> */}
            <Tooltip content={<CustomToolTip />} cursor={{ stroke: "white", strokeWidth: 0.5}} isAnimationActive={false} offset={-40} position={{ y: -35}} allowEscapeViewBox={{x: true, y: true}}/>
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