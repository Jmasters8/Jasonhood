import React from 'react';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";
import { render } from 'react-dom';
import { format, parseISO, subDays } from "date-fns";

class HomeGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverTime: ""
    }

    this.handleHoverTime = this.handleHoverTime.bind(this);
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
    // if (Object.keys(this.props.stocks).length === 0) return null
    
    // let getStockData = () => {
      
    //   let stocks = Object.values(this.props.stocks)
    //   let assets = Object.values(this.props.assets)
    //   let data = [];
    //   if (stocks.length !== 8) return null

    //   for (let i = 0; i < stocks.length; i++) {
    //     let dataPoint = {
    //       price: null,
    //       date: null
    //     }
    //     let assetsAmount = 0
    //     let stock = stocks[i]
    //     let stockTicker = Object.keys(this.props.stocks)[i]
    //     if (stock.data === undefined) {
    //       return null
    //     }

    //     for (let j = 0; j < stock.data['o'].length; j++) {
    //       let stockPrice = stock.data['o'][j]
    //       // console.log(stockTicker, stockPrice)
    //       dataPoint.date = stock.data['t'][j]
    //       for (let k = 0; k < assets.length; k++) {
    //         let asset = assets[k];
    //         // console.log(asset)
    //         if (asset.ticker === stockTicker) {
    //           assetsAmount += (asset.amount * stockPrice)
    //         }
    //       }
          
    //     }
    //     dataPoint.price = assetsAmount
    //     data.push(dataPoint)
    //   }
    //   // console.log(data)
    // }
    // getStockData()

    
     


    function getTime(unixTime) {
      let date = new Date(unixTime * 1000);
      let hours = date.getHours();
      hours = ((hours + 11) % 12 + 1);
      let minutes = "0" + date.getMinutes();
      // let seconds = "0" + date.getSeconds();
      let formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }

    let data = [{price: 10, date: '6:00 AM'}, {price: 11, date: '6:05 AM'}, {price: 15, date: '6:10 AM'}, {price: 13, date: '6:15 AM'},
                {price: 2, date: '6:20 AM'}, {price: 17, date: '6:25 AM'}, {price: 14, date: '6:30 AM'}, {price: 21, date: '6:35 AM'},
                {price: 10, date: '6:40 AM'}, {price: 1, date: '6:45 AM'}, {price: 32, date: '6:50 AM'}, {price: 15, date: '6:55 AM'},
                {price: 17, date: '7:00 AM'}, {price: 25, date: '7:05 AM'}, {price: 20, date: '7:10 AM'}, {price: 28, date: '7:15 AM'},
                {price: 18, date: '7:20 AM'}, {price: 12, date: '7:25 AM'}, {price: 15, date: '7:30 AM'}, {price: 19, date: '7:35 AM'},
                {price: 11, date: '7:40 AM'}, {price: 12, date: '7:45 AM'}, {price: 30, date: '7:50 AM'}, {price: 28, date: '7:55 AM'},
                {price: 42, date: '8:00 AM'}, {price: 45, date: '8:05 AM'}, {price: 40, date: '8:10 AM'}, {price: 48, date: '8:15 AM'},
                {price: 50, date: '8:20 AM'}, {price: 58, date: '8:25 AM'}, {price: 51, date: '8:30 AM'}, {price: 60, date: '8:35 AM'},
                {price: 42, date: '8:40 AM'}, {price: 22, date: '8:45 AM'}, {price: 38, date: '8:50 AM'}, {price: 70, date: '8:55 AM'},
                {price: 78, date: '9:00 AM'}, {price: 58, date: '9:05 AM'}, {price: 51, date: '9:10 AM'}, {price: 60, date: '9:15 AM'},
                {price: 42, date: '9:20 AM'}, {price: 22, date: '9:25 AM'}, {price: 38, date: '9:30 AM'}, {price: 70, date: '9:45 AM'},
                {price: 78, date: '9:50 AM'}, {price: 65, date: '9:55 AM'}, {price: 69, date: '10:00 AM'}, {price: 75, date: '10:05 AM'},
                {price: 80, date: '10:15 AM'}, {price: 88, date: '10:20 AM'}, {price: 98, date: '10:25 AM'}, {price: 100, date: '10:30 AM'} ];

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