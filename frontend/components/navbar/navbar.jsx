import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    let currentDate = new Date().toDateString()
    // if (currentDate.includes("Sat")) {
    //   this.state = {
    //     collapsed: true,
    //     start: (new Date().setHours(6, 0, 0, 0) / 1000) - 86400,
    //     now: (new Date().setHours(13, 0, 0, 0) / 1000) - 86400,
    //     shares: 0,
    //     buyingPower: this.props.currentUser.buying_power,
    //     currentStock: "",
    //     stockSymbol: ""
    //   }
    // } else if (currentDate.includes("Sun")) {
    //   this.state = {
    //     collapsed: true,
    //     start: (new Date().setHours(6, 0, 0, 0) / 1000) - 172800,
    //     now: (new Date().setHours(13, 0, 0, 0) / 1000) - 172800,
    //     shares: 0,
    //     buyingPower: this.props.currentUser.buying_power,
    //     currentStock: "",
    //     stockSymbol: ""
    //   }
    // } else {
    //   this.state = {
    //     collapsed: true,
    //     start: new Date().setHours(6, 30, 0, 0) / 1000,
    //     now: new Date().setHours(13, 0, 0, 0) / 1000,
    //     shares: 0,
    //     buyingPower: this.props.currentUser.buying_power,
    //     currentStock: "",
    //     stockSymbol: ""
    //   }
    // }

    this.state = {
      collapsed: true,
      start: (new Date().setHours(6, 30, 0, 0) / 1000) - 259200,
      now: (new Date().setHours(13, 0, 0, 0) / 1000) - 259200,
      shares: 0,
      buyingPower: this.props.currentUser.buying_power,
      currentStock: "",
      stockSymbol: ""
    }

    this.routeToStockPage = this.routeToStockPage.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(type) {
    return (e) =>
      this.setState({ [type]: (e.target.value).toUpperCase() })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleSearch(e) {
    e.preventDefault();
    <Link to={`/stocks/${this.state.stockSymbol}`} key={window.location.pathname} ></Link>
  }

  onKeyUp() {
    return e => {
      if (e.key === "Enter") {
        this.props.history.push(`/stocks/${this.state.stockSymbol}`)
      }
    }
  }
  componentWillUnMount() {
    this.setState({ stockSymbol: "" })
  }

  handleLogout(e) {
    e.preventDefault()
    this.props.logout().then(() => this.props.history.push('/'))
  }

  routeToStockPage(ticker) {
    if (!this.props.stocks[ticker] || !this.props.stocks[ticker].Symbol) {
      this.props.fetchCurrentStock(ticker)
    }
  }

  render() {
    let symbol;
    if (!this.props.match.params.symbol) {
      symbol = this.state.stockSymbol
    } else {
      symbol = this.props.match.params.symbol
    }

    if (this.state.stockSymbol !== "") {
      document.getElementsByClassName("search-dropdown")[0].style.display = "block"
    } else if (this.state.stockSymbol === "" && document.getElementsByClassName("search-dropdown")[0]) {
      document.getElementsByClassName("search-dropdown")[0].style.display = "none"
    }

    document.addEventListener("click", e => {
      let dropdown = document.getElementsByClassName("search-dropdown")[0]
      let search = document.getElementsByClassName("navbar-search-5")

      if (!search.activeElement && dropdown) {
        dropdown.style.display = "none"
        document.getElementsByClassName("navbar-search-5")[0].style.backgroundColor = "black"
      }

    })
    if (document.getElementsByClassName("search-dropdown")[0] && document.getElementsByClassName("search-dropdown")[0].style.display === "block") {
      document.getElementsByClassName("navbar-search-5")[0].style.backgroundColor = "#1e2124"
    }

    let count = 0

    return (

      <header className="navbar">
        <div id="search-words">search-dropdown-name-green</div>
        <div className="navbar-1">
          <div className="navbar-logo">
            <div className="navbar-logo-1">
              <Link to="/"><div className="nav-logo"></div></Link>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="search-dropdown">
              <section className="search-dropdown-1">
                <h4 className="search-dropdown-stocks">Stocks</h4>
                {data.map((obj, i) => {

                  if (this.state.stockSymbol === "") return null
                  if ((count <= 8) && this.state.stockSymbol.toUpperCase() === obj.ticker.slice(0, this.state.stockSymbol.length).toUpperCase() || (count <= 8 &&
                    this.state.stockSymbol.toUpperCase() === obj.name.slice(0, this.state.stockSymbol.length).toUpperCase())) {
                    count += 1
                    let tickerClass;
                    let nameClass;
                    if (this.state.stockSymbol.toUpperCase() === obj.ticker.slice(0, this.state.stockSymbol.length).toUpperCase()) {
                      tickerClass = document.getElementById("search-words").innerHTML
                    } else {
                      tickerClass = "search-dropdown-name-white"
                    }


                    if (this.state.stockSymbol.toUpperCase() === obj.name.slice(0, this.state.stockSymbol.length).toUpperCase()) {
                      nameClass = document.getElementById("search-words").innerHTML
                    } else {
                      nameClass = "search-dropdown-name-white"
                    }

                    return (
                      <Link to={`/stocks/${obj.ticker}`} onClick={() => this.routeToStockPage(obj.ticker)} className="search-dropdown-stocks-1" key={i}>
                        <div className="search-dropdown-ticker">
                          <span>
                            <span className={tickerClass}>
                              {obj.ticker.slice(0, this.state.stockSymbol.length)}
                            </span>
                            <span className="search-dropdown-name-white">
                              {obj.ticker.slice(this.state.stockSymbol.length, obj.ticker.length)}
                            </span>
                          </span>
                        </div>
                        <div className="search-dropdown-name">
                          <span>
                            <span className={nameClass}>
                              {obj.name.slice(0, this.state.stockSymbol.length)}
                            </span>
                          </span>
                          <span>
                            <span className="search-dropdown-name-white">
                              {obj.name.slice(this.state.stockSymbol.length, obj.name.length)}
                            </span>
                          </span>
                        </div>
                      </Link>
                    )
                  }
                })}
              </section>
            </div>
            <div className="navbar-search">
              <div className="navbar-search-2">
                <div className="navbar-search-3">
                  <div className="navbar-search-4">
                    <div className="navbar-search-5">
                      <div className="navbar-search-6">
                        <div className="navbar-search-7">
                          <span className="navbar-search-8">
                            <img src="https://i.imgur.com/MJfg7Ne.png" alt="" />
                          </span>
                        </div>
                        <input type="text" className="navbar-search-input" placeholder="Search" value={this.state.stockSymbol} onChange={this.handleInput('stockSymbol')} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <Link onClick={() => this.props.fetchCurrentStock(this.state.stockSymbol)} className="search-link-button" to={`/stocks/${this.state.stockSymbol}`}><button className="search-link-button-1">Search</button></Link>
          <div className="navbar-list">
            <div className="navbar-list-1">

              <a href="https://github.com/Jmasters8/Jasonhood" target="_blank" className="navbar-list-2">
                <span className="navbar-list-word">Github</span>
              </a>

              <a href="https://www.linkedin.com/in/jason-masters8/" target="_blank" className="navbar-list-3">
                <span className="navbar-list-word">LinkedIn</span>
              </a>

              <a href="https://angel.co/u/jasonmasters" target="_blank" className="navbar-list-3">
                <span className="navbar-list-word">AngelList</span>
              </a>

              <a href="https://www.jasondmasters.com/" target="_blank" className="navbar-list-3">
                <span className="navbar-list-word">Portfolio</span>
              </a>

              <div className="navbar-list-4">
                <div>
                  <a className="nav-bar-account">
                    <span onClick={this.handleLogout} className="navbar-list-word">Log Out</span>
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