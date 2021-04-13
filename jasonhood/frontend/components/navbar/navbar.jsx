import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stockSymbol: ""
    }

    // console.log(this.state)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(type) {
    // console.log(this.state)
    return (e) =>
      this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchStock(this.state.stockSymbol.toUpperCase())
  }

  onKeyUp() {
    return e => {
      if (e.key === "Enter") {
        this.props.history.push(`/stocks/${this.state.stockSymbol}`)
        // <Link to={`/stocks/${this.state.stockSymbol}`}></Link>
      }
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      console.log(this.state)
      // <Link to={`/stocks/${this.state.stockSymbol}`}></Link>
    }
  }

  handleLogout(e) {
    e.preventDefault() 
    this.props.logout()
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
                      <input onKeyPress={this.handleKeyPress} type="text" className="navbar-search-input" placeholder="Search" value={this.state.stockSymbol} onChange={this.handleInput('stockSymbol')}/>
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
                    <span onClick={this.handleLogout} className="navbar-list-word">Account</span>
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