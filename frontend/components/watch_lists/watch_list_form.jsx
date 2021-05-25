import React from 'react';

class WatchListForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  hideForm() {
    document.getElementById("watch-list-form").style.display = "none";
  }

  handleInput(type) {
    return (e) => this.setState({[type]: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addWatchedAsset(null, this.props.currentUserId, null, this.state.categoryName)
  }

  render() {
    return(
      <div id="watch-list-form" className="watch-list-form">
        <form className="watch-list-form-1">
          <div className="watch-list-form-inputs">
            <button type="button" className="watch-list-form-inputs-emoji">
              <div className="watch-list-form-inputs-emoji-1">
                <div className="watch-list-form-inputs-emoji-2">
                  <div className="watch-list-form-inputs-emoji-3">
                    💡
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
      </div>
    )
  }
}

export default WatchListForm;