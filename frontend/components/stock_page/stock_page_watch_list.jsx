import React from 'react';
import StockPageLists from './stock_page_lists';
import { smilies, animals, items } from '../../util/emoji_utils'

class StockPageWatchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: "",
      emojis: "smilies"
    }

    this.closeModal = this.closeModal.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.setSmilies = this.setSmilies.bind(this);
    this.setAnimals = this.setAnimals.bind(this);
    this.setItems = this.setItems.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.createList = this.createList.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  showForm(e) {
    e.preventDefault();
    document.getElementsByClassName("create-new-list")[0].style.display = "none"
    document.getElementsByClassName("add-watch-list-3")[0].style.display = "block"
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.color = this.props.color
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.borderBottom = `1px solid ${this.props.color}`
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.color = "white"
    document.getElementsByClassName('stock-page-emojis-items')[0].style.color = "white"
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.borderBottom = "none"
    document.getElementsByClassName('stock-page-emojis-items')[0].style.borderBottom = "none"
  }

  handleInput(type) {
    return (e) => this.setState({ [type]: e.target.value })
  }

  openEmojis(e) {
    e.preventDefault();
    if (document.getElementsByClassName("stock-page-emojis")[0].style.display === "none" || document.getElementsByClassName("stock-page-emojis")[0].style.display === "") {
      document.getElementsByClassName("stock-page-emojis")[0].style.display = "block"
    } else if (document.getElementsByClassName("stock-page-emojis")[0].style.display === "block") {
      document.getElementsByClassName("stock-page-emojis")[0].style.display = "none"
    }
  }

  closeModal(e) {
    e.preventDefault();
    document.getElementsByClassName("add-watch-list")[0].style.visibility = "hidden";
    document.getElementsByClassName("add-watch-list-3")[0].style.display = "none";
    document.getElementsByClassName("stock-page-emojis")[0].style.display = "none"
  }

  closeForm(e) {
    e.preventDefault();
    document.getElementsByClassName("create-new-list")[0].style.display = "block"
    document.getElementsByClassName("add-watch-list-3")[0].style.display = "none"
    document.getElementsByClassName("add-watch-list-emoji-3")[0].innerHTML = "💡"
    document.getElementsByClassName("stock-page-emojis")[0].style.display = "none"
  }

  createList(e) {
    e.preventDefault()
    let emoji = document.getElementsByClassName("add-watch-list-emoji-3")[0].innerHTML
    this.props.addWatchedAsset(null, this.props.watcherId, null, this.state.categoryName, emoji)

    document.getElementsByClassName("create-new-list")[0].style.display = "block"
    document.getElementsByClassName("add-watch-list-3")[0].style.display = "none"
    document.getElementsByClassName("add-watch-list-emoji-3")[0].innerHTML = "💡"
    if (document.getElementsByClassName("add-watch-list-input-2")[0]) document.getElementsByClassName("add-watch-list-input-2")[0].value = "nothing"
    if (document.getElementsByClassName("add-watch-list-input-2-red")[0]) document.getElementsByClassName("add-watch-list-input-2-red")[0].value = ""
  }

  setSmilies() {
    this.setState({ emojis: "smilies" })
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.color = this.props.color
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.color = "white"
    document.getElementsByClassName('stock-page-emojis-items')[0].style.color = "white"

    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.borderBottom = `1px solid ${this.props.color}`
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.borderBottom = "none"
    document.getElementsByClassName('stock-page-emojis-items')[0].style.borderBottom = "none"
  }

  setAnimals() {
    this.setState({ emojis: "animals" })
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.color = this.props.color
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.color = "white"
    document.getElementsByClassName('stock-page-emojis-items')[0].style.color = "white"

    document.getElementsByClassName('stock-page-emojis-animals')[0].style.borderBottom = `1px solid ${this.props.color}`
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.borderBottom = "none"
    document.getElementsByClassName('stock-page-emojis-items')[0].style.borderBottom = "none"
  }

  setItems() {
    this.setState({ emojis: "items" })
    document.getElementsByClassName('stock-page-emojis-items')[0].style.color = this.props.color
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.color = "white"
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.color = "white"

    document.getElementsByClassName('stock-page-emojis-items')[0].style.borderBottom = `1px solid ${this.props.color}`
    document.getElementsByClassName('stock-page-emojis-smilies')[0].style.borderBottom = "none"
    document.getElementsByClassName('stock-page-emojis-animals')[0].style.borderBottom = "none"
  }

  setEmoji(emoji, e) {
    e.preventDefault()
    document.getElementsByClassName("add-watch-list-emoji-3")[0].innerHTML = emoji
    document.getElementsByClassName("stock-page-emojis")[0].style.display = "none"
  }

  saveChanges() {
    let unchecked = `url("${this.props.checkbox}")`
    let checked = `url("${this.props.checkboxFill}")`
    let watchedAssets = Object.values(this.props.watchedAssets)
    let categories = [];
    for (let i = 0; i < watchedAssets.length; i++) {
      let asset = watchedAssets[i];
      if (asset.category !== null && asset.ticker === "") {
        categories.push([asset.category, asset.ticker, asset.emoji, asset.id])
      }
    }

    for (let i = 0; i < categories.length; i++) {
      if (document.getElementsByClassName(`create-new-list-category-checkbox-empty${i}`)[0].style.content === checked) {
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
    document.getElementsByClassName(this.props.submitButton)[0].className = "create-new-list-submit-off"
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

    let emojiStringToArray = function (str) {
      let split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
      let emojis = [];
      for (let i = 0; i < split.length; i++) {
        let emoji = split[i]
        if (emoji !== "" && !emojis.includes(emoji) && emoji.length > 1) {
          emojis.push(emoji);
        }
      }
      return emojis;
    };

    let smiliesArr = emojiStringToArray(smilies)
    let animalsArr = emojiStringToArray(animals)
    let itemsArr = emojiStringToArray(items)

    let displayEmojis = () => {
      if (this.state.emojis === "smilies") {
        return (
          smiliesArr.map((emoji, i) => {
            return (
              <button key={i} id={'emoji' + i} onClick={(e) => this.setEmoji(emoji, e)} className="emoji-modal-2">
                {emoji}
              </button>
            )
          })
        )
      } else if (this.state.emojis === "animals") {
        return (
          animalsArr.map((emoji, i) => {
            return (
              <button key={i} id={'emoji' + i} onClick={(e) => this.setEmoji(emoji, e)} className="emoji-modal-2">
                {emoji}
              </button>
            )
          })
        )
      } else if (this.state.emojis === "items") {
        return (
          itemsArr.map((emoji, i) => {
            return (
              <button key={i} id={'emoji' + i} onClick={(e) => this.setEmoji(emoji, e)} className="emoji-modal-2">
                {emoji}
              </button>
            )
          })
        )
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
                    <button onClick={this.openEmojis} className="add-watch-list-emoji">
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
                        <input className={this.props.inputFocus} value={this.state.categoryName} onChange={this.handleInput('categoryName')} type="text" placeholder="List Name" />
                      </div>
                    </div>
                  </div>

                  <footer className="add-watch-list-buttons">
                    <div className="add-watch-list-buttons-1">
                      <div className="add-watch-list-buttons-2">
                        <button onClick={this.closeForm} className={this.props.cancelList}>
                          <div className="add-watch-list-buttons-4">
                            <span className="add-watch-list-buttons-5">
                              <span className={this.props.cancel}>
                                Cancel
                              </span>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="add-watch-list-buttons-7">
                      <button onClick={this.createList} className={this.props.createList}>
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

                  <div className="stock-page-emojis">
                    <div className="stock-page-emojis-categories">
                      <span onClick={this.setSmilies} className="stock-page-emojis-smilies">
                        Smilies
                      </span>
                      <span onClick={this.setAnimals} className="stock-page-emojis-animals">
                        Animals
                      </span>
                      <span onClick={this.setItems} className="stock-page-emojis-items">
                        Items
                      </span>
                    </div>

                    <div className="stock-page-emojis-list">
                      {displayEmojis()}
                    </div>

                  </div>

                </form>

              </div>
            </div>


            <div className="create-new-list">
              <button onClick={this.showForm} className="create-new-list-1">
                <div className="create-new-list-2">

                </div>
                <div className="create-new-list-3">
                  <div className={this.props.plusButtonBackgroundClass}>
                    <div className="create-new-list-5">
                      <span className={this.props.plusButtonClass}>
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
                return <StockPageLists
                  length={categories.length}
                  addWatchedAsset={this.props.addWatchedAsset}
                  stock={this.props.stock}
                  allWatchedAssets={watchedAssets}
                  category={list[0]}
                  emoji={list[1]}
                  key={i}
                  index={i}
                  submitButton={this.props.submitButton}
                  checkbox={this.props.checkbox}
                  checkboxFill={this.props.checkboxFill}
                />
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