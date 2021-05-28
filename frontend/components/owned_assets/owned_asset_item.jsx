import React from 'react';
import { Link } from 'react-router-dom';
import MiniGraph from '../graph/mini_graph';

class OwnedAssetItem extends React.Component {
  constructor(props) {
    super(props);


    let currentDate = new Date().toDateString()
    if (currentDate.includes("Sat")) {
      this.state = {
        start: (new Date().setHours(6, 0, 0, 0) / 1000) - 86400,
        now: (new Date().setHours(13, 0, 0, 0) / 1000) - 86400
      } 
    } else if (currentDate.includes("Sun")) {
      this.state = {
        start: (new Date().setHours(6, 0, 0, 0) / 1000) - 172800,
        now: (new Date().setHours(13, 0, 0, 0) / 1000) - 172800
      }
    } else {
      this.state = {
        start: new Date().setHours(6, 0, 0, 0) / 1000,
        now: new Date().setHours(13, 0, 0, 0) / 1000
      }
    }
  
  }

  // setSatDate() {
  //   this.setState({start: (new Date().setHours(6, 0, 0, 0) / 1000) - 86400, now: (new Date().setHours(13, 0, 0, 0) / 1000) - 86400})
  // }

  // setSunDate() {
  //   this.setState({start: (new Date().setHours(6, 0, 0, 0) / 1000) - 172800, now: (new Date().setHours(13, 0, 0, 0) / 1000) - 172800})
  // }

  componentDidMount() {
    // if (Object.keys(this.props.stocks).length >= 0) {
    //   this.props.fetchStock(this.props.ticker)
    //   .then(() => this.props.fetchStockData(this.props.ticker, this.state.start, this.state.now))
    // }

    if (!this.props.stocks[this.props.ticker]) {
      this.props.fetchStock(this.props.ticker)
      .then(() => this.props.fetchStockData(this.props.ticker, this.state.start, this.state.now))
    }



    // this.props.fetchStock(this.props.ticker)
    // .then(() => this.props.fetchStockData(this.props.ticker, this.state.start, this.state.now))
  }

  render() {
    
    if (Object.keys(this.props.stocks).length === 0) return null
    // let checkDate = () => {
    //   let currentDate = new Date().toDateString()
    //   if (currentDate.includes("Sat")) {
    //     this.setSatDate()
    //   } else if (currentDate.includes("Sun")) {
    //     this.setSunDate
    //   }
    // }
    // checkDate()

    let shares = 0;
    let assets = Object.values(this.props.assets)
    assets.forEach(asset => {
      if (this.props.ticker === asset.ticker && asset.ticker !== null) {
        shares += asset.amount
      }
    })

    
    let currentPrice = () => {
      
      for (let key in this.props.stocks) {
        // console.log(this.props.stocks[key])
        if (key === this.props.ticker && this.props.stocks[key].data) {
          return this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1]
          // return this.props.stocks[key].data.c[this.props.stocks.key.data.c.length]
        }
      }
    }
    
    let stockData = () => {
      for (let key in this.props.stocks) {
        if (key === this.props.ticker) {
          return this.props.stocks[key].data
        }
      }
      return null
    }
    // console.log(stockData())


    let upOrDown = () => {
      let percentChange = 0
      // for (let key in this.props.stocks) {
      //   if (key === this.props.ticker) {
      //     percentChange = (this.props.stocks[key].c - this.props.stocks[key].o) / this.props.stocks[key].o * 100
      //   } 
      // }

      // for (let key in this.props.stocks) {
      //   if (key === this.props.ticker && this.props.stocks[key].c !== undefined) {
      //     percentChange = (this.props.stocks[key].c - this.props.stocks[key].o) / this.props.stocks[key].o * 100
      //   } else if (key === this.props.ticker) {
      //     // let cLength = this.props.stocks[key].data.c.length
      //     percentChange = (this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1] - this.props.stocks[key].data.o[0]) / this.props.stocks[key].data.o[0] * 100
      //     // console.log( (this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1])
      //     // console.log(percentChange)
      //   }
      // }
      
      for (let key in this.props.stocks) {
        if (key === this.props.ticker && this.props.stocks[key].data) {
          percentChange = (this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1] - this.props.stocks[key].data.o[0]) / this.props.stocks[key].data.o[0] * 100
        }
      }

      if (percentChange > 0) {
        return (
          <span className="owned-asset-item-percentage-increase">
            +{percentChange.toFixed(2)}%
          </span>
        )
      } else {
        return (
          <span className="owned-asset-item-percentage-decrease">
            {percentChange.toFixed(2)}%
          </span>
        )
      }
      
    }
    // currentPrice()
    // console.log(currentPrice())

    return (
      <li className="owned-asset-item">
        <Link className="owned-asset-item-link" to={`/stocks/${this.props.ticker}`}>
          <div className="owned-asset-item-ticker">
            <div className="owned-asset-item-ticker-2">
              <span className="owned-asset-item-ticker-3">
                {this.props.ticker}
              </span>
            </div>
            <div className="owned-asset-item-shares">
              <span className="owned-asset-item-shares-2">
                {shares} Shares
              </span>
            </div>
          </div>
          <MiniGraph data={stockData()}/>
          <div className="owned-asset-item-price">
            <span className="owned-asset-item-price-2">
              <div className="owned-asset-item-price-3">
                <span className="owned-asset-item-price-2">
                  ${currentPrice()}
                </span>
                <div className="owned-asset-item-price-5"></div>
                <span className="owned-asset-item-percentage">
                  {upOrDown()}
                </span>
              </div>
            </span>
          </div>
        </Link>
      </li>
    )
  }
}

export default OwnedAssetItem;