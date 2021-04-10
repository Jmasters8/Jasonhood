import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stockSymbol: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) =>
      this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchStock(this.state.stockSymbol.toUpperCase())
  }

  render() {
    return (

      <header className="navbar">
        <div className="navbar-1">
          <a className="navbar-logo">
            <div className="navbar-logo-1">
              <img src="https://i.imgur.com/iU9XhbV.png" alt=""/>  
            </div>
          </a>

          <div className="navbar-search">
            <div className="navbar-search-2">
              <div className="navbar-search-3">
                <div className="navbar-search-4">
                  <div className="navbar-search-5">
                    <div className="navbar-search-6">
                      <div className="navbar-search-7">
                        <span className="navbar-search-8">
                          <img src="https://cdn3.iconfinder.com/data/icons/gray-toolbar/512/find-512.png" alt=""/>
                        </span>
                      </div>
                      <input type="text" className="navbar-search-input" placeholder="Search"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navbar-list">
            <div className="navbar-list-1">

              <a className="navbar-list-2">
                <span className="navbar-list-word">Free Stocks</span>
              </a>

              <a className="navbar-list-3">
                <span className="navbar-list-word">Portfolio</span>
              </a>

              <a className="navbar-list-3">
                <span className="navbar-list-word">Cash</span>
              </a>

              <a className="navbar-list-3">
                <span className="navbar-list-word">Messages</span>
              </a>

              <div className="navbar-list-4">
                <div>
                  <a className="nav-bar-account">
                    <span className="navbar-list-word">Account</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>

    )
  }
}

export default Navbar;