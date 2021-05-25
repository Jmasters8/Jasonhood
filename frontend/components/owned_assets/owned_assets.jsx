import React from 'react';
import { Link } from 'react-router-dom';
import { fetchStockData } from '../../actions/stocks';
import OwnedAssetItem from './owned_asset_item';
import WatchLists from '../watch_lists/watch_lists';
import WatchListCategory from '../watch_lists/watch_list_category';

class OwnedAssets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: new Date().setHours(6, 0, 0, 0) / 1000,
      now: new Date().setHours(13, 0, 0, 0) / 1000
    }
  }

  // componentDidMount() {
  //   this.props.fetchStock("NIO")
  //   .then(() => this.props.fetchStockData("NIO", this.state.start, this.state.now))
  // }

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
  
  let allWatchedAssets = Object.values(this.props.watchedAssets)
  let watchedAssets = [];
  for (let i = 0; i < allWatchedAssets.length; i++) {
    let asset = allWatchedAssets[i]
    if (!watchedAssets.includes(asset) && asset.category !== null) {
      watchedAssets.push(asset)
    }
  }

  let categories = [];
  // for (let i = 0; i < allWatchedAssets.length; i++) {
  //   let asset = allWatchedAssets[i];
  //   if (!categories.includes(asset.category) && asset.category !== null) {
  //     categories.push(asset.category)
  //   }
  // }

  for (let i = 0; i < allWatchedAssets.length; i++) {
    let asset = allWatchedAssets[i];
    if (!categories.includes(asset.category) && asset.category !== null) {
      categories.push([asset.category, asset.emoji])
    }
  }

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
                <OwnedAssetItem stocks={this.props.stocks} fetchStock={this.props.fetchStock} fetchStockData={this.props.fetchStockData} key={i} assets={this.props.assets} ticker={stock}/>
              ))}
            </ul>
            <WatchLists currentUserId={this.props.currentUserId} addWatchedAsset={this.props.addWatchedAsset} watchedAssets={this.props.watchedAssets}/>
            <ul className="watch-list-category">
              {categories.map((category, i) => {
                return <WatchListCategory currentUserId={this.props.currentUserId} deleteWatchedAsset={this.props.deleteWatchedAsset} stocks={this.props.stocks} fetchStock={this.props.fetchStock} fetchStockData={this.props.fetchStockData} key={i} id={i} category={category[0]} emoji={category[1]} watchedAssets={watchedAssets} allWatchedAssets={this.props.watchedAssets} assets={this.props.assets}/>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default OwnedAssets