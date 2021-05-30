import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import data from './data';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   stockSymbol: ""
    // }



    let currentDate = new Date().toDateString()
    if (currentDate.includes("Sat")) {
      this.state = {
        collapsed: true,
        start: (new Date().setHours(6, 0, 0, 0) / 1000) - 86400,
        now: (new Date().setHours(13, 0, 0, 0) / 1000) - 86400,
        shares: 0,
        buyingPower: this.props.currentUser.buying_power,
        currentStock: "",
        stockSymbol: ""
      }
    } else if (currentDate.includes("Sun")) {
      this.state = {
        collapsed: true,
        start: (new Date().setHours(6, 0, 0, 0) / 1000) - 172800,
        now: (new Date().setHours(13, 0, 0, 0) / 1000) - 172800,
        shares: 0,
        buyingPower: this.props.currentUser.buying_power,
        currentStock: "",
        stockSymbol: ""
      }
    } else {
      this.state = { 
        collapsed: true,
        start: new Date().setHours(6, 0, 0, 0) / 1000,
        now: new Date().setHours(13, 0, 0, 0) / 1000,
        shares: 0,
        buyingPower: this.props.currentUser.buying_power,
        currentStock: "",
        stockSymbol: ""
       }
    }



    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(type) {
    // console.log(this.state)
    return (e) =>
      this.setState({[type]: (e.target.value).toUpperCase()})
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.fetchStock(this.state.stockSymbol.toUpperCase())
  }

  handleSearch(e) {
    e.preventDefault();
    // <Link to={`/stocks/${this.state.stockSymbol}`} onClick={()=>this.setState({a: !this.state.a})} key={window.location.pathname} ></Link>
    <Link to={`/stocks/${this.state.stockSymbol}`} key={window.location.pathname} ></Link>
  }

  onKeyUp() {
    return e => {
      if (e.key === "Enter") {
        this.props.history.push(`/stocks/${this.state.stockSymbol}`)
        // <Link to={`/stocks/${this.state.stockSymbol}`}></Link>
      }
    }
  }
  componentWillUnMount() {
    this.setState({stockSymbol: ""})
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.stockSymbol !== this.state.stockSymbol) {
      
  //   }
  // }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      // <Link to={`/stocks/${this.state.stockSymbol}`}></Link>
    }
  }

  handleLogout(e) {
    e.preventDefault() 
    this.props.logout().then(() => this.props.history.push('/'))
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
      // if (e.target !== dropdown && search.contains('active') && (dropdown.style.display === "block" || dropdown.style.display === "")) {
      //   console.log('remove pls')
      //   dropdown.style.display = "none"
      // }

      if (!search.activeElement && dropdown) {
        dropdown.style.display = "none"
      }
      
    })

    return (

      <header className="navbar">
        <div className="navbar-1">
          <div className="navbar-logo">
            <div className="navbar-logo-1">
              <Link to="/"><img src="https://i.imgur.com/iU9XhbV.png" alt=""/></Link>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="search-dropdown">
              <section className="search-dropdown-1">
                <h4 className="search-dropdown-stocks">Stocks</h4>
              {data.map((obj, i) => {
                if (this.state.stockSymbol === "") return null
                if (this.state.stockSymbol.toUpperCase() === obj.ticker.slice(0, this.state.stockSymbol.length).toUpperCase() || 
                this.state.stockSymbol.toUpperCase() === obj.name.slice(0, this.state.stockSymbol.length).toUpperCase()) {
                  return (
                    <div className="search-dropdown-stocks-1" key={i}>
                      <div className="search-dropdown-ticker">
                        <span>
                          <span className="search-dropdown-name-green">
                            {obj.ticker.slice(0, this.state.stockSymbol.length)}
                          </span>
                          <span className="search-dropdown-name-white">
                            {obj.ticker.slice(this.state.stockSymbol.length, obj.ticker.length)}
                          </span>
                        </span>
                      </div>
                      <div className="search-dropdown-name">
                        <span>
                          <span className="search-dropdown-name-green">
                            {obj.name.slice(0, this.state.stockSymbol.length)}
                          </span>
                        </span>
                        <span>
                          <span className="search-dropdown-name-white">
                            {obj.name.slice(this.state.stockSymbol.length, obj.name.length)}
                          </span>
                        </span>
                      </div>
                    </div>
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
          </form>
          <Link onClick={() => this.props.fetchCurrentStock(this.state.stockSymbol)} className="search-link-button" to={`/stocks/${this.state.stockSymbol}`}><button className="search-link-button-1">Search</button></Link>
            {/* <Link className="search-link-button" to={`/stocks/${this.state.stockSymbol}`} onClick={
            () => this.props.fetchCurrentStock(this.state.stockSymbol)
            .then(this.props.fetchStockInfo(symbol))
            .then(this.props.fetchStockData(symbol, this.state.start, this.state.now))
            }><button className="search-link-button-1">Search</button></Link> */}
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

              <a href="jasondmasters.com" target="_blank" className="navbar-list-3">
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