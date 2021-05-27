import React from 'react';

class StockPageLists extends React.Component {
  constructor(props) {
    super(props);


  }

  addToList() {

  }

  render() {
    console.log(this.props.stock)
    let count = -1
    for (let i = 0; i < this.props.allWatchedAssets.length; i++) {
      let asset = this.props.allWatchedAssets[i];
      if (asset.category === this.props.category) {
        count += 1
      }
    }

    return (
      <button onClick={this.addToList} className="create-new-list-category">
        <div className="create-new-list-category-check">
          <div className="create-new-list-category-checkbox">
            <div className="create-new-list-category-checkbox-empty"></div>
          </div>
        </div>

        <div className="create-new-list-emoji">
          <div className="create-new-list-emoji-1">
            <div className="create-new-list-emoji-2">
              <div className="create-new-list-emoji-3">
                {this.props.emoji}
              </div>
            </div>
          </div>
        </div>

        <div className="create-new-list-category">
          <div>
          <label className="create-new-list-category-1">
            <span className="create-new-list-category-2">
              {this.props.category}
            </span>
          </label>
          <span className="create-new-list-category-3">
            {count} items
          </span>
          </div>
        </div>

      </button>
    )
  }
}

export default StockPageLists;