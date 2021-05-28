import React from 'react';

class StockPageLists extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      lists: []
    }

    this.addToList = this.addToList.bind(this);
  }

  componentDidMount() {
    // console.log(document.getElementsByClassName(`create-new-list-category-checkbox-empty${this.props.index}`)[0].style)
    document.getElementsByClassName(`create-new-list-category-checkbox-empty${this.props.index}`)[0].style.content = "url('https://i.imgur.com/cXKHK8l.png')"
    document.getElementsByClassName(`create-new-list-category-checkbox-empty${this.props.index}`)[0].style.height = "20px"
    document.getElementsByClassName(`create-new-list-category-checkbox-empty${this.props.index}`)[0].style.width = "20px"
  }

  addToList() {
    let element= document.getElementsByClassName(`create-new-list-category-checkbox-empty${this.props.index}`)[0]
    let button = document.getElementsByClassName('create-new-list-submit-off')[0]
    let unchecked = 'url("https://i.imgur.com/cXKHK8l.png")'
    let checked = 'url("https://i.imgur.com/eqjgMg7.png")'

    if (element.style.content === unchecked) {
      element.style.content = checked
      button.style.pointerEvents = "visible"
      button.style.color = "rgb(0, 200, 5)"
      button.style.cursor = "pointer"
    } else {
      element.style.content = unchecked
      button.style.pointerEvents = "none"
      button.style.color = "rgb(98, 108, 112)"
    }

    for (let i = 0; i < this.props.length; i++) {
      if (document.getElementsByClassName(`create-new-list-category-checkbox-empty${i}`)[0].style.content === checked) {
        button.style.pointerEvents = "visible"
        button.style.color = "rgb(0, 200, 5)"
        button.style.cursor = "pointer"
      }
    }
      
  }

  render() {
    
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
            <div className={`create-new-list-category-checkbox-empty${this.props.index}`}></div>
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
            <span className={`create-new-list-category-2${this.props.index}`}>
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