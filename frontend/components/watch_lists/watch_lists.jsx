import React from 'react';
import WatchListForm from './watch_list_form';

class WatchLists extends React.Component {
  constructor(props) {
    super(props);


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
              <button className="watch-list-button">
                +
              </button>

            </header>
          </div>
        </div>

        <WatchListForm />
      
      </div>
    )
  }
}

export default WatchLists;