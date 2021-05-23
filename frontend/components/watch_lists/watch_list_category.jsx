import React from 'react';

class WatchListCategory extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <li className="watch-list-category-1">
        <div className="watch-list-category-2">
          <div className='watch-list-category-3'>
            <div className="watch-list-category-4">
              <div className="watch-list-category-5">
                <div className="watch-list-category-6">
                  <div className="watch-list-category-7">
                    <div className="watch-list-lightbulb">
                    <div className="watch-list-lightbulb-1">
                    💡
                    </div>
                    </div>
                  </div>
                </div>

                <div className="watch-list-title">
                  <span className="watch-list-title-1">
                    {(this.props.category)}
                  </span>
                </div>

              </div>
            </div>

            <div className="watch-list-dropdown">
              <div className="watch-list-edit">
                <button className="watch-list-edit-button">
                  {/* <img className="watch-list-edit-button-1" src="https://i.imgur.com/u5oCv3G.png" alt=""/> */}
                  <div></div>
                </button>
              </div>

              <div className="watch-list-dropdown-1">
                <span className="watch-list-dropdown-2">
                  {/* <img className="watch-list-dropdown-3" src="https://i.imgur.com/9xOZVK8.png" alt=""/> */}
                  <div className="watch-list-dropdown-3"></div>
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </li>
    )
  }
}

export default WatchListCategory;