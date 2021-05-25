import React from 'react';
import WatchListItem from './watch_list_item';

class WatchListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.showList = this.showList.bind(this);
  }

  showList() {
    if (document.getElementById(this.props.id).style.display === "block" || document.getElementById(this.props.id).style.display === "") {
      document.getElementById(this.props.id).style.display = "none"
    } else if (document.getElementById(this.props.id).style.display === "none") {
      document.getElementById(this.props.id).style.display = "block"
    }
  }

  render() {
    // if (!document.getElementById(this.props.id)) return null;
    // document.getElementById(this.props.id).style.display = "block";

    let list = [];
    let assets = this.props.watchedAssets

    for (let i = 0; i < assets.length; i++) {
      let asset = assets[i]
      if (asset.category === this.props.category && !list.includes(asset) && asset.ticker !== "") {
        list.push(asset)
      }
    }
    

    return (
      <div>
        <li className="watch-list-category-1">
          <div className="watch-list-category-2">
            <div className='watch-list-category-3'>
              <div onClick={this.showList} className="watch-list-category-4">
                <div className="watch-list-category-5">
                  <div className="watch-list-category-6">
                    <div className="watch-list-category-7">
                      <div className="watch-list-lightbulb">
                      <div className="watch-list-lightbulb-1">
                      💡
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className="watch-list-title">
                    <span className="watch-list-title-1">
                      {(this.props.category)}
                    </span>
                  </div>

                </div>
              </div>

              <div className="watch-list-dropdown">
                <div className="watch-list-edit">
                  <button className="watch-list-edit-button">
                    {/* <img className="watch-list-edit-button-1" src="https://i.imgur.com/u5oCv3G.png" alt=""/> */}
                    <div onClick={this.showList}className="watch-list-edit-button-1"></div>
                  </button>
                </div>

                <div onClick={this.showList} className="watch-list-dropdown-1">
                  <span className="watch-list-dropdown-2">
                    {/* <img className="watch-list-dropdown-3" src="https://i.imgur.com/9xOZVK8.png" alt=""/> */}
                    <div className="watch-list-dropdown-3"></div>
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </li>
        <ul id={this.props.id} className="watched-asset-item-list">
          {list.map((asset, i) => {
            return <WatchListItem addWatchedAsset={this.props.addWatchedAsset} key={i} asset={asset} assets={this.props.assets} stocks={this.props.stocks} fetchStock={this.props.fetchStock} fetchStockData={this.props.fetchStockData}/>
          })}
        </ul>
      </div>
    )
  }
}

export default WatchListCategory;