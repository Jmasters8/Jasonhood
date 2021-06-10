import React from 'react';

class WatchListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: "",
      emoji: this.props.chosenEmoji
    }

    this.handleClick = this.handleClick.bind(this);
    this.chooseEmoji = this.chooseEmoji.bind(this);
  }

  hideForm(e) {
    e.preventDefault()
    document.getElementById("watch-list-form").style.display = "none";
    document.getElementById("emoji-modal").style.display = "none";
  }

  handleInput(type) {
    return (e) => this.setState({[type]: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.categoryName.length <= 0) return null

    this.props.addWatchedAsset(null, this.props.currentUserId, null, this.state.categoryName, this.props.chosenEmoji)

    this.hideForm(e)
    this.setState({categoryName: "", emoji: "💡"})
    document.getElementById("emoji-modal").style.display = "none";
    document.getElementsByClassName("watch-list-form-inputs-emoji-3")[0].innerHTML = "💡"
  }

  chooseEmoji() {
    // this.setState({emoji: "😂"})
    document.getElementById("emoji-modal").style.display = "block";
  }

  render() {
  
    return(
      <div id="watch-list-form" className="watch-list-form">
        <form className="watch-list-form-1">
          <div className="watch-list-form-inputs">
            <button onClick={this.chooseEmoji} type="button" className="watch-list-form-inputs-emoji">
              <div className="watch-list-form-inputs-emoji-1">
                <div className="watch-list-form-inputs-emoji-2">
                  <div className="watch-list-form-inputs-emoji-3">
                    {this.props.chosenEmoji}
                  </div>
                </div>
              </div>
            </button>

            <div className="watch-list-form-inputs-title">
              <div className="watch-list-form-inputs-title-1">
                <input className="watch-list-form-inputs-title-2" value={this.state.categoryName} onChange={this.handleInput('categoryName')} type="text" placeholder="List Name"/>
              </div>
            </div>

          </div>

          <footer className="watch-list-form-cancel">
            <div className="watch-list-form-cancel-1">
              <div className="watch-list-form-cancel-2">
                <button onClick={this.hideForm} className="watch-list-form-cancel-3">
                  <div className="watch-list-form-cancel-4">
                    <span className="watch-list-form-cancel-5">
                      <span className="watch-list-form-cancel-6">
                        Cancel
                      </span>
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="watch-list-form-create">
              <button onClick={this.handleClick} className="watch-list-form-create-1">
                <div className="watch-list-form-create-2">
                  <span className="watch-list-form-create-3">
                    <span className="watch-list-form-create-4">
                      Create List
                    </span>
                  </span>
                </div>
              </button>
            </div>

          </footer>

        </form>

        {/* <div className="emoji-modal">
          <div className="emoji-modal-1">
            
          </div>
        </div> */}


      </div>
    )
  }
}

export default WatchListForm;