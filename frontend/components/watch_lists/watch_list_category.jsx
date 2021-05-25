import React from 'react';
import WatchListItem from './watch_list_item';

class WatchListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.showList = this.showList.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }

  showList() {
    
    if (document.getElementById(this.props.id).style.display === "block" || document.getElementById(this.props.id).style.display === "") {
      document.getElementById(this.props.id).style.display = "none"
    } else if (document.getElementById(this.props.id).style.display === "none") {
      document.getElementById(this.props.id).style.display = "block"
    }
  }

  showEdit() {
    // document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.inset = '0px auto auto 0px'
    document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.position = 'absolute'
    document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.zIndex = '999'
    document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.left = '50px'
    document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.top = '35px'
    // document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = 'hidden'
    
    if (document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "hidden" || document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "") {
      document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "visible";
      console.log(document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility)
    } else if (document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "visible") {
      document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "hidden";
    }
  }

  render() {
    // if (!document.getElementById(this.props.id)) return null;
    // document.getElementById(this.props.id).style.display = "block";
    let page = document.getElementsByTagName("HTML")[0];
    page.onClick = () => {
      document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "hidden";
    }

    let list = [];
    let assets = this.props.watchedAssets

    for (let i = 0; i < assets.length; i++) {
      let asset = assets[i]
      if (asset.category === this.props.category && !list.includes(asset) && asset.ticker !== "") {
        list.push(asset)
      }
    }

    let editStyle = {
      visibility: "hidden",
      position: "absolute",
      zIndex: "999",
      left: "50px",
      top: "35px"
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
                  <div id="tomato">

                  </div>

                </div>
              </div>

              <div className="watch-list-dropdown">
                <div className="watch-list-edit">
                  <button onClick={this.showEdit} className="watch-list-edit-button">
                    {/* <img className="watch-list-edit-button-1" src="https://i.imgur.com/u5oCv3G.png" alt=""/> */}
                    <div className="watch-list-edit-button-1"></div>
                  </button>
                </div>

                <div id={`watch-list-dropdown-edit` + this.props.id} style={editStyle} className="watch-list-dropdown-edit">
                  <div className="watch-list-dropdown-edit-1">
                    <button className="watch-list-dropdown-edit-modal">
                      <div className="watch-list-dropdown-edit-modal-1">
                        <div className="watch-list-dropdown-edit-modal-2">
                          <div className="watch-list-dropdown-edit-modal-3">
                            <div className="watch-list-dropdown-edit-modal-cog"></div>
                          </div>
                          <span className="watch-list-dropdown-edit-modal-4">
                            Edit List
                          </span>
                        </div>
                      </div>
                    </button>

                    <button className="watch-list-dropdown-delete">
                      <div className="watch-list-dropdown-delete-1">
                        <div className="watch-list-dropdown-delete-2">
                          <div className="watch-list-dropdown-delete-3">
                            <div className="watch-list-dropdown-delete-x"></div>
                          </div>
                          <span className="watch-list-dropdown-delete-4">
                            Delete List
                          </span>
                        </div>
                      </div>
                    </button>

                  </div>
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