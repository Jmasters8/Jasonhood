import React from 'react';
import WatchListItem from './watch_list_item';

class WatchListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.showList = this.showList.bind(this);
    this.showEdit = this.showEdit.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  showList() {
    
    if (document.getElementById(this.props.id).style.display === "block" || document.getElementById(this.props.id).style.display === "") {
      document.getElementById(this.props.id).style.display = "none"
    } else if (document.getElementById(this.props.id).style.display === "none") {
      document.getElementById(this.props.id).style.display = "block"
    }
  }

  showEdit() {
    if (document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "hidden" || document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "") {
      document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "visible";
    } else if (document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "visible") {
      document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "hidden";
    }
  }

  deleteList() {
    this.props.watchedAssets.forEach(asset => {
      if (asset.category === this.props.category) {
        this.props.deleteWatchedAsset(this.props.currentUserId, asset.id)
      }
    })

    document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "hidden";

  }

  openModal() {
    document.getElementsByClassName('watch-list-edit-modal')[0].style.visibility = "visible"
    let col = document.getElementsByClassName("watch-list-dropdown-edit")
    for (let i = 0; i < col.length; i++) {
      col[i].style.visibility = "hidden"
    }
    document.getElementsByClassName('watch-list-edit-modal-input-emoji-2')[0].innerHTML = this.props.emoji
    document.getElementsByClassName('watch-list-edit-modal-input-text-2')[0].value = this.props.category
  }

  render() {
      if (document.getElementsByClassName("left-1")[0]) {
        let page = document.getElementsByClassName("left-1")[0]
        page.addEventListener("click", () => {
          if (document.getElementById(`watch-list-dropdown-edit${this.props.id}`) && document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility === "visible") {
            document.getElementById(`watch-list-dropdown-edit${this.props.id}`).style.visibility = "hidden";
          }
        })
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
                        {this.props.emoji}
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
                    <button onClick={this.openModal} className="watch-list-dropdown-edit-modal">
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

                    <button onClick={this.deleteList} className="watch-list-dropdown-delete">
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