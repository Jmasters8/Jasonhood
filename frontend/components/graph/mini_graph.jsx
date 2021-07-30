import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, ReferenceLine } from "recharts";

class MiniGraph extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (!this.props.data || this.props.data.s === "no_data") return null
    
    let data = this.props.data['o'];
    let graphData = [];

    for (let i = 0; i < data.length; i++) {
      graphData.push({price: data[i], date: i})
    }
 

    let lineColor = () => {
      if ((this.props.data['c'][this.props.data['c'].length - 1] - this.props.data['o'][0]) >= 0) {
        return "rgb(0,200,5)"
      } else {
        return "rgb(255,80,0)"
      }
    }

    return (
      <div className="mini-graph">
        <ResponsiveContainer width="100%" height="80%" minWidth="0%" minHeight="0%">
          <AreaChart data={graphData}>
            <Area className="potato" dataKey="price" stroke={`${lineColor()}`} strokeWidth={1} fill="#1e2124"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" domain={data[0], data[data.length - 1]} hide/>
            <ReferenceLine y={data[0]} ifOverflow="extendDomain" strokeWidth={1.5} strokeHeight={1.5} strokeDasharray="1 3" stroke="lightslategray" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}


export default MiniGraph;