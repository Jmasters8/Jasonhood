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
        start: new Date().setHours(6, 30, 0, 0) / 1000,
        now: new Date().setHours(13, 0, 0, 0) / 1000
      }
    }

    this.routeToStockPage = this.routeToStockPage.bind(this)
  }

  componentDidMount() {
    if (!this.props.stocks[this.props.ticker]) {
      this.props.fetchStock(this.props.ticker)
      .then(() => this.props.fetchStockData(this.props.ticker, this.state.start, this.state.now))
    }
  }

  routeToStockPage() {
    if (!this.props.stocks[this.props.ticker].Symbol) { 
      this.props.fetchCurrentStock(this.props.ticker)
    }
  }

  render() {
    
    if (Object.keys(this.props.stocks).length === 0) return null

    let shares = 0;
    let assets = Object.values(this.props.assets)
    assets.forEach(asset => {
      if (this.props.ticker === asset.ticker && asset.ticker !== null) {
        shares += asset.amount
      }
    })
    
    let currentPrice = () => {
      
      for (let key in this.props.stocks) {
        
        if (key === this.props.ticker && this.props.stocks[key] && this.props.stocks[key].data && this.props.stocks[key].data.c) {

          return (this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1]).toFixed(2)
        }
      }
    }
    
    let stockData = () => {
      for (let key in this.props.stocks) {
        if (key === this.props.ticker && this.props.stocks[key]) {
          return this.props.stocks[key].data
        }
      }
      return null
    }

    let upOrDown = () => {
      let percentChange = 0
      
      for (let key in this.props.stocks) {
        if (key === this.props.ticker && this.props.stocks[key] && this.props.stocks[key].data && this.props.stocks[key].data.c) {
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

    return (
      <li className="owned-asset-item">
        <Link className="owned-asset-item-link" to={`/stocks/${this.props.ticker}`} onClick={this.routeToStockPage}>
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