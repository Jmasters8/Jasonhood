import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import GraphTwoContainer from '../graph/graph_container_2';
import StockNewsContainer from '../stock_news/stock_news_container';
import StockForm from './stock_form';
import StockPageWatchList from './stock_page_watch_list';
import Loading from '../loading';

class Stock extends React.Component {
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
    //     assets: []
    //   }
    // } else if (currentDate.includes("Sun")) {
    //   this.state = {
    //     collapsed: true,
    //     start: (new Date().setHours(6, 0, 0, 0) / 1000) - 172800,
    //     now: (new Date().setHours(13, 0, 0, 0) / 1000) - 172800,
    //     shares: 0,
    //     buyingPower: this.props.currentUser.buying_power,
    //     currentStock: "",
    //     assets: []
    //   }
    // } else {
    //   this.state = {
    //     collapsed: true,
    //     start: new Date().setHours(6, 30, 0, 0) / 1000,
    //     now: new Date().setHours(13, 0, 0, 0) / 1000,
    //     shares: 0,
    //     buyingPower: this.props.currentUser.buying_power,
    //     currentStock: this.props.currentStock,
    //     assets: this.props.assets,
    //     currentStock: "",
    //     loading: true
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

    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)

    if (Object.keys(this.props.currentStock).length === 0 || Object.keys(this.props.currentStock === "None")) {
      this.props.fetchStockInfo(this.props.match.params.symbol)
        .then(() => this.props.fetchStockData(this.props.match.params.symbol, this.state.start, this.state.now))
        .then(() => this.props.fetchStockNews(this.props.match.params.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0]))
        .then(() => this.props.fetchCurrentStock(this.props.match.params.symbol))
    }
  }

  shouldComponentUpdate(nextProps, prevProps) {
    let prevAssets = Object.values(nextProps.assets)
    let nextAssets = prevProps.assets

    let assetChange = () => {

      if (prevAssets.length !== nextAssets.length) return true

      for (let i = 0; i < nextAssets.length; i++) {
        if (nextAssets[i].amount !== prevAssets[i].amount) {
          return true
        }
      }
      return false
    }
    return ((nextProps.currentStock !== this.props.currentStock || assetChange()) && this.props.currentStock.stock !== "None")
  }

  componentDidUpdate(prevProps) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)

    if (prevProps.currentStock.stock !== this.props.currentStock.stock && Object.keys(this.props.currentStock).length !== 0 && Object.keys(prevProps.currentStock).length !== 0) {
      this.props.fetchStockInfo(this.props.match.params.symbol)
        .then(() => this.props.fetchStockData(this.props.match.params.symbol, this.state.start, this.state.now))
        .then(() => this.props.fetchStockNews(this.props.match.params.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0]))
        .then(() => this.props.fetchCurrentStock(this.props.match.params.symbol))
    }
  }

  toggleDescription() {
    const currentState = this.state.collapsed;
    this.setState({ collapsed: !currentState });
  }

  handleInput(type) {
    return (e) =>
      this.setState({ [type]: e.target.value })
  }

  handleClick(e) {
    e.preventDefault();
    let currentPrice = this.props.stock.data['c'][this.props.stock.data['c'].length - 1]
    this.setState({ buyingPower: (this.state.buyingPower - (currentPrice * this.state.shares).toFixed(2)) })
    this.props.addStockAsset(this.props.stock.Symbol, this.props.currentUser.id, this.state.shares, (this.props.stock.data['c'][this.props.stock.data['c'].length - 1]).toFixed(2))
      .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUser.id))
  }

  isCollapsed(buttonClass) {
    if (this.state.collapsed) {
      return (
        <div>
          <div className="about-info-2">
            {this.props.stock.Description}
          </div>
          <button className={buttonClass} onClick={this.toggleDescription}>Read More</button>
        </div>
      )
    } else {
      return (
        <div>
          <div className="about-info-3">
            {this.props.stock.Description}
          </div> &nbsp;
          <button className={buttonClass} onClick={this.toggleDescription}>Read Less</button>
        </div>
      )
    }
  }

  isGood() {
    if ((this.props.stock.data['c'][this.props.stock.data['c'].length - 1] - this.props.stock.data['o'][0]).toFixed(2) >= 0) {
      return '+' + "$" + (this.props.stock.data['c'][this.props.stock.data['c'].length - 1] - this.props.stock.data['o'][0]).toFixed(2)
    } else {
      return "-" + "$" + (this.props.stock.data['c'][this.props.stock.data['c'].length - 1] - this.props.stock.data['o'][0]).toFixed(2) * -1
    }
  }

  render() {
    
    if (this.props.stock === undefined || this.props.stock.data === undefined || this.props.stock.Name === undefined || this.props.stock.data["s"] === "no_data") {
      return <Loading />
    }
    console.log(this.props.stock)
    let marketPrice = this.props.data['c'][this.props.data['c'].length - 1].toFixed(2)

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let currentPrice = this.props.stock.data['c'][this.props.stock.data['c'].length - 1]
    let openPrice = this.props.stock.data['o'][0]

    /////////////////////////CSS CHANGES DEPENDING ON STOCK DATA////////////////

    if (currentPrice - openPrice >= 0 && document.getElementsByClassName("main-graph-days-2")[0]) {
      document.getElementsByClassName("main-graph-days-2")[0].style.color = "rgb(0, 200, 5)"
    } else if (currentPrice - openPrice < 0 && document.getElementsByClassName("main-graph-days-2")[0]) {
      document.getElementsByClassName("main-graph-days-2")[0].style.color = "rgb(255, 80, 0)"
    }

    if (document.getElementsByClassName("nav-logo")[0]) {
      currentPrice - openPrice >= 0 ? document.getElementsByClassName("nav-logo")[0].className = "nav-logo-green" : document.getElementsByClassName("nav-logo")[0].className = "nav-logo-red"
    }

    let priceChange = currentPrice - openPrice

    let buttonClass;
    currentPrice - openPrice >= 0 ? buttonClass = "review-order-5" : buttonClass = "review-order-5-red"

    let marketPriceClass;
    currentPrice - openPrice >= 0 ? marketPriceClass = "trade-market-price-2" : marketPriceClass = "trade-market-price-2-red"

    let moneyAvailableClass;
    currentPrice - openPrice >= 0 ? moneyAvailableClass = "money-available-2" : moneyAvailableClass = "money-available-2-red"

    let sharesAvailableClass;
    currentPrice - openPrice >= 0 ? sharesAvailableClass = "shares-available-3" : sharesAvailableClass = "shares-available-3-red"

    let addToListsClass;
    priceChange >= 0 ? addToListsClass = "add-list-3" : addToListsClass = "add-list-3-red"

    let buySellToggleClass;
    priceChange >= 0 ? buySellToggleClass = "trade-stock-name-toggled" : buySellToggleClass = "trade-stock-name-toggled-red"

    let buySellToggleHoverClass;
    priceChange >= 0 ? buySellToggleHoverClass = "trade-stock-name-3" : buySellToggleHoverClass = "trade-stock-name-3-red"

    let aboutInfoButtonClass;
    priceChange >= 0 ? aboutInfoButtonClass = "about-info-button" : aboutInfoButtonClass = "about-info-button-red"

    let newsButtonClass;
    priceChange >= 0 ? newsButtonClass = "news-button-text" : newsButtonClass = "news-button-text-red"

    let sharesAmountClass;
    priceChange >= 0 ? sharesAmountClass = "shares-amount-input" : sharesAmountClass = "shares-amount-input-red"

    let plusButtonBackgroundClass;
    priceChange >= 0 ? plusButtonBackgroundClass = "create-new-list-4" : plusButtonBackgroundClass = "create-new-list-4-red"

    let plusButtonClass;
    priceChange >= 0 ? plusButtonClass = "create-new-list-6" : plusButtonClass = "create-new-list-6-red"

    let submitButton;
    priceChange >= 0 ? submitButton = "create-new-list-submit-on" : submitButton = "create-new-list-submit-on-red"

    let checkbox;
    priceChange >= 0 ? checkbox = "https://i.imgur.com/3cqArve.png" : checkbox = "https://i.imgur.com/ExqtVlK.png"

    let checkboxFill;
    priceChange >= 0 ? checkboxFill = "https://i.imgur.com/eqjgMg7.png" : checkboxFill = "https://i.imgur.com/bTgwPnl.png"

    let createList;
    priceChange >= 0 ? createList = "add-watch-list-buttons-8" : createList = "add-watch-list-buttons-8-red"

    let cancelList;
    priceChange >= 0 ? cancelList = "add-watch-list-buttons-3" : cancelList = "add-watch-list-buttons-3-red"

    let cancel;
    priceChange >= 0 ? cancel = "add-watch-list-buttons-6" : cancel = "add-watch-list-buttons-6-red"

    let inputFocus;
    priceChange >= 0 ? inputFocus = "add-watch-list-input-2" : inputFocus = "add-watch-list-input-2-red"

    let color;
    priceChange >= 0 ? color = "rgb(0, 200, 5)" : color = "rgb(255, 80, 0)"

    let eles = document.getElementsByClassName("navbar-list-word")

    if (document.getElementsByClassName("navbar-list-word")[0] || document.getElementsByClassName("navbar-list-word-red")[0] || document.getElementsByClassName("navbar-list-word-green")[0]) {
      if (priceChange >= 0) {
        for (let e = eles.length - 1; e >= 0; e--) {
          eles[e].className = "navbar-list-word-green"
        }
      } else {
        for (let e = eles.length - 1; e >= 0; e--) {
          eles[e].className = "navbar-list-word-red"
        }
      }
    }

    if (priceChange >= 0 && document.getElementById("search-words")) {
      document.getElementById("search-words").innerHTML = "search-dropdown-name-green"
    } else if (priceChange < 0 && document.getElementById("search-words")) {
      document.getElementById("search-words").innerHTML = "search-dropdown-name-red"
    }


    let peRatio = parseFloat(this.props.stock.PERatio).toFixed(2)
    let dividendYield = this.props.stock.DividendYield
    let eps = this.props.stock.EPS
    if (dividendYield === "0" || dividendYield === "None") dividendYield = "−"
    if (this.props.stock.PERatio === "None" || this.props.stock.PERatio === "0") peRatio = "−"
    if (eps === "None" || eps === "0") eps = "−"
    let totalPortfolio = 0;

    const sharesAmount = () => {
      let sum = 0;
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        if (asset.ticker === this.props.stock.Symbol) {
          sum += asset.amount
        }
      }
      return sum;
    }


    for (let j = 0; j < Object.values(this.props.assets).length; j++) {
      totalPortfolio += (Object.values(this.props.assets)[j].amount * Object.values(this.props.assets)[j].price)
    }

    const portfolioDiversity = () => {
      let totalAmountOfStock = 0
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        if (asset.ticker === this.props.stock.Symbol) {
          totalAmountOfStock += (asset.amount * asset.price)
        }
      }
      return ((totalAmountOfStock / totalPortfolio) * 100).toFixed(2)
    }


    const averageCost = () => {
      let sum = 0;
      let count = 0
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        if (asset.ticker === this.props.stock.Symbol) {
          sum += (asset.amount * asset.price)
          count += asset.amount
        }
      }
      return (sum / count).toFixed(2)
    }

    const todaysReturn = () => {
      let returnAmount = ((currentPrice * totalSharesAmount()) - (openPrice * totalSharesAmount()))
      if (returnAmount >= 0) {
        return "+$" + returnAmount.toFixed(2)
      } else {
        return "-$" + (-1 * returnAmount.toFixed(2))
      }
    }

    let totalAssetAmount = () => {
      let totalAssetPrice = 0;
      let assets = Object.values(this.props.assets);

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i]
        if (asset.ticker === this.props.stock.Symbol) {
          totalAssetPrice += (asset.price * asset.amount)
        }
      }
      return totalAssetPrice;
    }

    const totalSharesAmount = () => {
      let assets = Object.values(this.props.assets);
      let shares = 0;

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i]
        if (asset.ticker === this.props.stock.Symbol) {
          shares += asset.amount
        }
      }
      return shares
    }

    const todaysReturnPercent = () => {
      let returnAmount = ((currentPrice * totalSharesAmount()) - (openPrice * totalSharesAmount()))
      if (returnAmount >= 0) {
        return "(+" + (returnAmount / totalPortfolio * 100).toFixed(2) + "%)"
      } else {
        return "(" + (returnAmount / totalPortfolio * 100).toFixed(2) + "%)"
      }
    }
    
    const totalReturn = () => {
      
      if (marketValue() - totalAssetAmount() >= 0) {
        return ("+$" + (marketValue() - totalAssetAmount()).toFixed(2))
      } else {
        return ("$" + (marketValue() - totalAssetAmount()).toFixed(2))
      }
    }

    const totalReturnPercent = () => {
      if ((totalAssetAmount() / marketValue()) < 1) {
        return ("(+" + (totalAssetAmount() / marketValue()).toFixed(2) + "%)")
      } else {
        return ("(-" + (totalAssetAmount() / marketValue()).toFixed(2) + "%)")
      }
    }

    const marketValue = () => {
      let assets = Object.values(this.props.assets);
      let shares = 0

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i]
        if (asset.ticker === this.props.stock.Symbol) {
          shares += asset.amount
        }
      }

      return (shares * currentPrice).toFixed(2)
    }

    const ownedAssets = () => {
      if (totalAssets() > 0) {
        return (
          <section className="owned-assets">
            <div className="owned-assets-1">
              <div className="owned-assets-2">
                <header className="owned-assets-3">
                  <div className="owned-assets-4">
                    Your Market Value
                  </div>
                  <h2 className="owned-assets-5">
                    <span className="owned-assets-6">
                      ${numberWithCommas(marketValue())}
                    </span>
                  </h2>
                </header>
                <table className="owned-assets-table">
                  <tbody className="owned-assets-table-1">
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Today's Return
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td className="owned-assets-table-4">
                        {todaysReturn()} {todaysReturnPercent()}
                      </td>
                    </tr>
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Total Return
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td className="owned-assets-table-4">
                        {numberWithCommas(totalReturn())} {(totalReturnPercent())}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="owned-assets-2-2">
                <header className="owned-assets-3">
                  <div className="owned-assets-4">
                    Your Average Cost
                  </div>
                  <h2 className="owned-assets-5">
                    <span className="owned-assets-6">
                      ${averageCost()}
                    </span>
                  </h2>
                </header>
                <table className="owned-assets-table">
                  <tbody className="owned-assets-table-1">
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Shares
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td id="sharesAmount" className="owned-assets-table-4">
                        {numberWithCommas(sharesAmount())}
                      </td>
                    </tr>
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Portfolio Diversity
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td className="owned-assets-table-4">
                        {portfolioDiversity()}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )
      }
    }

    const totalAssets = () => {
      let totalPrice = 0;
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        if (asset.ticker === this.props.stock.Symbol) {
          totalPrice += (asset.amount * asset.price)
        }
      }
      return totalPrice.toFixed(2)
    }

    const showStock = () => {
      let companyName = this.props.stock.Name;

      return (
        <div className="main">
          <div className="main-filler">
            <div className="main-filler-1">
            </div>
          </div>

          <div className="main-1">
            <div className="main-2">
              <div className="main-3">
                <div className="main-4">
                  <div className="main-5">
                    <main className="main-6">

                      <div className="main-category-list">
                        <div className="related-lists-6">
                          <div className="related-lists-7">
                            <div className="related-lists-8">
                              <div className="related-lists-img">
                                <img className="related-lists-img-1" src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/-1617285526935.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" alt="" />
                              </div>
                              <span className="related-lists-9">
                                &nbsp;Stock
                                  </span>
                            </div>
                          </div>
                          <div className="related-lists-7-2">
                            <div className="related-lists-8-2">
                              <div className="related-lists-img">
                                <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/california/portrait_48/1x.png" alt="" />
                              </div>
                              <span className="related-lists-10">
                                &nbsp;Maybe California
                                  </span>
                            </div>
                          </div>
                          <div className="related-lists-7-3">
                            <div className="related-lists-8-3">
                              <div className="related-lists-img">
                                <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/portrait_48/1x.png" alt="" />
                              </div>
                              <span className="related-lists-11">
                                &nbsp;100,000 Most Popular
                                  </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="main-content">
                        <div className="main-content-1">
                          <header className="main-content-header">
                            <div className="main-content-header-1">
                              <h1 className="main-content-header-2">{companyName}</h1>
                            </div>
                            <div className="main-content-header-analysis">
                              <div className="main-content-header-analysis-1">
                                <div className="main-content-header-analysis-2">
                                  <button className="main-content-header-analysis-3">
                                    <div className="main-content-header-analysis-4">
                                      <img src="https://learnscrivenerfast.com/wp-content/uploads/2015/11/price-tag.png" alt="" />
                                      <span className="main-content-header-analysis-5">
                                        <span className="main-content-header-analysis-6">
                                          61% Buy
                                        </span>
                                      </span>

                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </header>

                          <section className="graph">
                            <header className="graph-header">
                              <div className="graph-header-1">
                                <h1 className="graph-header-title">
                                  <span className="graph-header-title-1">
                                    $
                                  </span>
                                </h1>
                              </div>

                              <div className="price-change">
                                <span className="price-change-today">
                                  <span>
                                    {this.isGood()}
                                  </span>
                                  <span className="price-change-today-span-2">
                                    ({((currentPrice - openPrice) / openPrice * 100).toFixed(2)}%)
                                  </span>
                                </span>
                                <span className="price-change-today-1">Today</span>
                              </div>

                            </header>

                            <div className="main-graph">
                              <div className="main-graph-1">
                                <div className="main-graph-2">
                                  <GraphTwoContainer stock={this.props.stock} />
                                </div>
                                <div className="main-graph-days">
                                  <div className="main-graph-days-1">
                                    <button className="main-graph-days-2">
                                      <span className="main-graph-days-3">
                                        1D
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        1W
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        1M
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        3M
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        1Y
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        5Y
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </section>

                          {ownedAssets()}

                          <section className="about">
                            <header className="about-title">
                              <div className="about-title-1">
                                <div className="about-title-2">
                                  <h2 className="about-title-3">
                                    <span className="about-title-4">
                                      About
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </header>

                            <div className="about-info">
                              <h3 className="about-info-1">

                                {this.isCollapsed(aboutInfoButtonClass)}

                              </h3>
                            </div>

                            <div className="about-info-4">
                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Market Cap
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  {parseInt(this.props.stock.MarketCapitalization).toLocaleString()}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Price-Earnings Ratio
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  {peRatio}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Dividend Yield
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  {dividendYield}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Sector
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  {((this.props.stock.Sector)[0]).toUpperCase() + (this.props.stock.Sector).slice(1, this.props.stock.Sector.length).toLowerCase()}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    52 Week High
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  ${parseFloat(this.props.stock['52WeekHigh']).toFixed(2)}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    52 Week Low
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  ${parseFloat(this.props.stock['52WeekLow']).toFixed(2)}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    EPS
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  {eps}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Analyst Target Price
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  ${this.props.stock.AnalystTargetPrice}
                                </div>
                              </div>


                            </div>
                          </section>

                          <section className="related-lists">
                            <header className="related-lists-1">
                              <div className="related-lists-2">
                                <div className="related-lists-3">
                                  <h2 className="related-lists-4">
                                    <span className="related-lists-5">
                                      Related Lists
                                    </span>
                                  </h2>
                                </div>
                              </div>
                            </header>

                            <div className="related-lists-6">
                              <div className="related-lists-7">
                                <div className="related-lists-8">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/-1617285526935.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" alt="" />
                                  </div>
                                  <span className="related-lists-9">
                                    &nbsp;Stock
                                  </span>
                                </div>
                              </div>
                              <div className="related-lists-7-2">
                                <div className="related-lists-8-2">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/california/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="related-lists-10">
                                    &nbsp;Maybe California
                                  </span>
                                </div>
                              </div>
                              <div className="related-lists-7-3">
                                <div className="related-lists-8-3">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/portrait_48/1x.png" alt="" />
                                  </div>
                                  <span className="related-lists-11">
                                    &nbsp;100,000 Most Popular
                                  </span>
                                </div>
                              </div>
                            </div>
                          </section>

                          <StockNewsContainer symbol={this.props.match.params.symbol} newsButtonClass={newsButtonClass} />

                        </div>

                        <StockForm
                          addWatchedAsset={this.props.addWatchedAsset}
                          updateStockAmount={this.props.updateStockAmount}
                          deleteStockAsset={this.props.deleteStockAsset}
                          stock={this.props.stock} assets={this.props.assets}
                          currentUserBuyingPower={this.props.currentUser.buying_power}
                          updateBuyingPower={this.props.updateBuyingPower}
                          currentUserId={this.props.currentUser.id}
                          addStockAsset={this.props.addStockAsset}
                          buyingPower={this.state.buyingPower} currentPrice={currentPrice}
                          marketPrice={marketPrice} shares={this.state.shares}
                          symbol={this.props.stock.Symbol}
                          watchedAssets={this.props.watchedAssets}
                          buttonClass={buttonClass}
                          marketPriceClass={marketPriceClass}
                          moneyAvailableClass={moneyAvailableClass}
                          sharesAvailableClass={sharesAvailableClass}
                          addToListsClass={addToListsClass}
                          buySellToggleClass={buySellToggleClass}
                          buySellToggleHoverClass={buySellToggleHoverClass}
                          sharesAmountClass={sharesAmountClass}
                        />

                      </div>
                    </main>
                  </div>
                </div>
              </div>
              <NavbarContainer />
            </div>
          </div>
          <div className="analysis-hover">
            <span className="analysis-hover-text">
              61% of analysts rate stock as a buy
            </span>
          </div>
          <StockPageWatchList
            watcherId={this.props.currentUser.id}
            addWatchedAsset={this.props.addWatchedAsset}
            stock={this.props.stock}
            watchedAssets={this.props.watchedAssets}
            ticker={this.props.stock.Symbol}
            plusButtonBackgroundClass={plusButtonBackgroundClass}
            plusButtonClass={plusButtonClass}
            submitButton={submitButton}
            checkbox={checkbox}
            checkboxFill={checkboxFill}
            createList={createList}
            cancelList={cancelList}
            cancel={cancel}
            inputFocus={inputFocus}
            color={color}
          />
        </div>
      )
    }

    const noShowStock = () => {
      return null
    }

    return this.props.stock ? showStock() : noShowStock()
  }
}

export default Stock;