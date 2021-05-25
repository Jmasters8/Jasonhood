import React from 'react';
import WatchListForm from './watch_list_form';

class WatchLists extends React.Component {
  constructor(props) {
    super(props);

    this.showForm = this.showForm.bind(this);
  }

  showForm() {

    document.getElementById("watch-list-form").style.display = "block";
  }

  render() {
    let allWatchedAssets = Object.values(this.props.watchedAssets)
    let watchedAssets = [];
    for (let i = 0; i < allWatchedAssets.length; i++) {
      let asset = allWatchedAssets[i]
      if (!watchedAssets.includes(asset) && asset.category !== null) {
        watchedAssets.push(asset)
      }
    }
    
    return (
      <div>
        <div className="watch-list-header">
          <div className="watch-list-header-1">
            <header className="watch-list-header-2">
              <span className="watch-list-header-3">
                Lists
              </span>
              <button onClick={this.showForm} className="watch-list-button">
                +
              </button>

            </header>
          </div>
        </div>

        <WatchListForm currentUserId={this.props.currentUserId} addWatchedAsset={this.props.addWatchedAsset} />
      </div>
    )
  }
}

export default WatchLists;