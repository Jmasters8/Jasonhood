import React from 'react';

class WatchListEdit extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      list: ""
    }
  
  }


  // check() {
  //   let category = document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0].value
  //   this.setState({list: category})
  //   console.log('inputValue: ', document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0].value)
  //   console.log('state: ', this.state)
  // }

  render() {
    // if (!document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0]) return null
    let inputValue = document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0].value
    let stocks = Object.values(this.props.watchedAssets)
    let list = [];

    for (let i = 0; i < stocks.length; i++) {
      let stock = stocks[i];
      if (stock.category === this.state.list || stock.category === inputValue) {
        list.push(stock.ticker)
      }
    }

    return (
      <div className="thismelist">
        {list.map(stock => {
          <div className="thismelistitem">
            {stock}
          </div>
        })}
      </div>
    )
  }

}

export default WatchListEdit;