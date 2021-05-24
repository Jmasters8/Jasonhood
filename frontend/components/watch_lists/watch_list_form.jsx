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

                </div>
              </div>
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default WatchListForm;