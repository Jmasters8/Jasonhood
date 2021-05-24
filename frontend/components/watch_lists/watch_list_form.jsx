import React from 'react';

class WatchListForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className="watch-list-form">
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
                <input className="watch-list-form-inputs-title-2" type="text" placeholder="List Name"/>
              </div>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default WatchListForm;