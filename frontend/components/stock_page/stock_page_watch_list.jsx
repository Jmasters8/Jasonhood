import React from 'react';

class StockPageWatchList extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    document.getElementsByClassName("add-watch-list")[0].style.visibility = "hidden"
  }

  render() {
    return (
      <div className="add-watch-list">
        <section className="add-watch-list-1">
          <div className="add-watch-list-2">
            <header className="add-watch-list-header">
              <h1 className="add-watch-list-header-1">
                <span className="add-watch-list-header-2">
                  Add {this.props.ticker} to Your Lists
                </span>
              </h1>
              <button onClick={this.closeModal} className="add-watch-list-header-x">
                <div className="add-watch-list-header-x-1">
                  <img className="add-watch-list-header-x-2" src="https://i.imgur.com/rmBxqXX.png" />
                </div>
              </button>
            </header>
            <div>
              <div className="add-watch-list-3">

              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default StockPageWatchList