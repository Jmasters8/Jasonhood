import React from 'react';
import { Link } from 'react-router-dom';
import MiniGraph from '../graph/mini_graph';

class WatchListItem extends React.Component {
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

    this.deleteAsset = this.deleteAsset.bind(this);
  }

  componentDidMount() {
    this.props.fetchStock(this.props.asset.ticker)
      .then(() => this.props.fetchStockData(this.props.asset.ticker, this.state.start, this.state.now))
  }

  deleteAsset() {
    this.props.deleteWatchedAsset(this.props.currentUserId, this.props.asset.id)
  }

  render() {
    if (Object.keys(this.props.stocks).length === 0) return null;
    let hasShares = () => {
      let shares = 0;

      let assets = Object.values(this.props.assets)
      assets.forEach(asset => {
        if (this.props.asset.ticker === asset.ticker && asset.ticker !== null) {
          shares += asset.amount
        }
      })
      if (shares !== 0) return shares + " " + "Shares"
    }

    let stockData = () => {
      for (let key in this.props.stocks) {
        if (key === this.props.asset.ticker) {
          return this.props.stocks[key].data
        }
      }
      return null
    }

    let currentPrice = () => {

      for (let key in this.props.stocks) {

        if (key === this.props.asset.ticker && this.props.stocks[key].data) {
          return (this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1]).toFixed(2)
        }
      }
    }

    let upOrDown = () => {
      let percentChange = 0
      for (let key in this.props.stocks) {
        if (key === this.props.asset.ticker && this.props.stocks[key].data) {
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
    let name;
    let change;

    for (let key in this.props.stocks) {
      if (key === this.props.asset.ticker && this.props.stocks[key].data) {
        change = (this.props.stocks[key].data.c[this.props.stocks[key].data.c.length - 1] - this.props.stocks[key].data.o[0])
      }
    }

    if (change > 0) {
      name = "delete-watched-item-green"
    } else {
      name = "delete-watched-item-red"
    }

    return (
      <li className="owned-asset-item-delete">
        <img onClick={this.deleteAsset} className={name} src="https://i.imgur.com/C02Ou7j.png"></img>
        <Link className="owned-asset-item-link-2" to={`/stocks/${this.props.asset.ticker}`} onClick={() => this.props.fetchCurrentStock(this.props.asset.ticker)}>
          <div className="owned-asset-item-ticker">
            <div className="owned-asset-item-ticker-2">
              <span className="owned-asset-item-ticker-3">
                {this.props.asset.ticker}
              </span>
            </div>

            <div className="owned-asset-item-shares">
              <span className="owned-asset-item-shares-2">
                {hasShares()}
              </span>
            </div>
          </div>

          <MiniGraph data={stockData()} />

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

export default WatchListItem;