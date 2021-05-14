import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStockData } from '../../actions/stocks';
import OwnedAssetItem from './owned_asset_item'

class OwnedAssets extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchStockData(this.props.ticker)
  }

  render() {

  let stocks = []
 
  const myAssets = () => {
    
    let assets = Object.values(this.props.assets)
    for (let i = 0; i < assets.length; i++) {
      let asset = assets[i];

      if (!stocks.includes(asset.ticker) && asset.ticker !== null ) {
        stocks.push(asset.ticker)
      }
    }
  }
  myAssets()
  // console.log(stocks)

    // const myAssets = () => {
    //   let num = 0;

    //   let assets = Object.values(this.props.props.assets)

    //   for (let i = 0; i < assets.length; i++) {
    //     let asset = assets[i];
    //     if (asset.ticker === "NIO") {
    //       num += asset.amount
    //     }
    //   }
    //   return num
    // }

    // const totalSharesPrice = () => {
    //   let sum = 0;
    //   let assets = Object.values(this.props.props.assets)

    //   for (let i = 0; i < assets.length; i++) {
    //     let asset = assets[i];
    //     if (asset.ticker === this.props.stock.Symbol) {
    //       sum += asset.amount
    //     }
    //   }
    //   return sum;
    // }




  // console.log(myAssets())

  // console.log(this.props)

    return (
      <div className="right-1">
        <div className="right-2">
          <div className="right-3">
            <div className="right-4">
              <div className="right-5">
                <header className="right-6">
                  <span className="right-7">
                    Stocks
                  </span>
                </header>
              </div>
            </div>
            <ul className="owned-asset-item=list">
              {stocks.map((stock, i) => (
                <OwnedAssetItem fetchStockData={this.props.fetchStockData} key={i} assets={this.props.assets} ticker={stock}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default OwnedAssets