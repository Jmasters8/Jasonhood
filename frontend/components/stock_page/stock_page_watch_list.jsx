import React from 'react';
import StockPageLists from './stock_page_lists';

class StockPageWatchList extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  showForm(e) {
    e.preventDefault();
    document.getElementsByClassName("add-watch-list-3")[0].style.display = "block"
  }

  closeModal() {
    document.getElementsByClassName("add-watch-list")[0].style.visibility = "hidden"
  }

  closeForm(e) {
    e.preventDefault();
    document.getElementsByClassName("add-watch-list-3")[0].style.display = "none"
  }

  saveChanges() {
    let unchecked = 'url("https://i.imgur.com/cXKHK8l.png")'
    let checked = 'url("https://i.imgur.com/eqjgMg7.png")'
    // let category = document.getElementById(`create-new-list-category-2${this.props.i}`)
    let watchedAssets = Object.values(this.props.watchedAssets)
    let categories = [];
    for (let i = 0; i < watchedAssets.length; i++) {
      let asset = watchedAssets[i];
      if (asset.category !== null && asset.ticker === "") {
        categories.push([asset.category, asset.ticker, asset.emoji, asset.id])
      }
    }
    console.log(categories.length)
    for (let i = 0; i < categories.length; i++) {
      if (document.getElementsByClassName(`create-new-list-category-checkbox-empty${i}`)[0].style.content === 'url("https://i.imgur.com/eqjgMg7.png")') {
        for (let j = 0; j < watchedAssets.length; j++) {
          if (watchedAssets[j].ticker === this.props.ticker && watchedAssets[j].category === categories[i][0]) {
            document.getElementsByClassName("watch-list-error")[0].style.display = "block"
            return null
          }
        }


        this.props.addWatchedAsset(this.props.ticker, this.props.watcherId, null, categories[i][0])
      } 
    }

    document.getElementsByClassName("add-watch-list")[0].style.visibility = "hidden"
    document.getElementsByClassName('create-new-list-submit-off')[0].style.pointerEvents = "none"
    document.getElementsByClassName('create-new-list-submit-off')[0].style.color = "rgb(98, 108, 112)"
    for (let i = 0; i < categories.length; i++) {
      document.getElementsByClassName(`create-new-list-category-checkbox-empty${i}`)[0].style.content = unchecked
    }
  }

  render() {

    let watchedAssets = Object.values(this.props.watchedAssets)
    let categories = [];

    for (let i = 0; i < watchedAssets.length; i++) {
      let asset = watchedAssets[i];
      if (asset.category !== null && asset.ticker === "") {
        categories.push([asset.category, asset.emoji])
      }
    }


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
                <form className="add-watch-list-4">
                  <div className="add-watch-list-5">
                    <button className="add-watch-list-emoji">
                      <div className="add-watch-list-emoji-1">
                        <div className="add-watch-list-emoji-2">
                          <div className="add-watch-list-emoji-3">
                            💡
                          </div>
                        </div>
                      </div>
                    </button>
                    <div className="add-watch-list-input">
                      <div className="add-watch-list-input-1">
                        <input className="add-watch-list-input-2" type="text" placeholder="List Name"/>
                      </div>
                    </div>
                  </div>

                  <footer className="add-watch-list-buttons">
                    <div className="add-watch-list-buttons-1">
                      <div className="add-watch-list-buttons-2">
                        <button onClick={this.closeForm} className="add-watch-list-buttons-3">
                          <div className="add-watch-list-buttons-4">
                            <span className="add-watch-list-buttons-5">
                              <span className="add-watch-list-buttons-6">
                                Cancel
                              </span>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="add-watch-list-buttons-7">
                      <button className="add-watch-list-buttons-8">
                        <div className="add-watch-list-buttons-9">
                          <span className="add-watch-list-buttons-10">
                            <span className="add-watch-list-buttons-11">
                              Create List
                            </span>
                          </span>
                        </div>
                      </button>
                    </div>
                  </footer>

                </form>
                {/* <div>
                {categories.map(list => {
                  return <StockPageLists list={list}/>
                })}
                </div> */}

              </div>
            </div>

            <div className="create-new-list">
              <button onClick={this.showForm} className="create-new-list-1">
                <div className="create-new-list-2">

                </div>
                <div className="create-new-list-3">
                  <div className="create-new-list-4">
                    <div className="create-new-list-5">
                      <span className="create-new-list-6">
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="create-new-list-7">
                    <span className="create-new-list-8">
                      Create New List
                    </span>
                  </label>
                </div>
              </button>
            </div>

            <div className="create-new-list-container">
              {categories.map((list, i) => {
                return <StockPageLists length={categories.length} addWatchedAsset={this.props.addWatchedAsset} stock={this.props.stock} allWatchedAssets={watchedAssets} category={list[0]} emoji={list[1]} key={i} index={i} />
              })}
            </div>
            <div className="watch-list-error">This stock is already on that list</div>
            <div className="create-new-list-submit">
              <button onClick={this.saveChanges} className="create-new-list-submit-off">
                <div className="create-new-list-submit-1">
                  <span className="create-new-list-submit-2">
                    <span className="create-new-list-submit-3">
                      Save Changes
                    </span>
                  </span>
                </div>
              </button>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default StockPageWatchList