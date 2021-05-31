import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import GraphTwoContainer from '../graph/graph_container_2';
import GraphTwo from '../graph/graph_2';
import StockNewsContainer from '../stock_news/stock_news_container';
import StockForm from './stock_form';
import StockPageWatchList from './stock_page_watch_list';

import Odometer from 'react-odometerjs';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid} from "recharts";

class Stock extends React.Component {
  constructor(props) {
    super(props);

    let currentDate = new Date().toDateString()
    if (currentDate.includes("Sat")) {
      this.state = {
        collapsed: true,
        start: (new Date().setHours(6, 0, 0, 0) / 1000) - 86400,
        now: (new Date().setHours(13, 0, 0, 0) / 1000) - 86400,
        shares: 0,
        buyingPower: this.props.currentUser.buying_power,
        currentStock: ""
      }
    } else if (currentDate.includes("Sun")) {
      this.state = {
        collapsed: true,
        start: (new Date().setHours(6, 0, 0, 0) / 1000) - 172800,
        now: (new Date().setHours(13, 0, 0, 0) / 1000) - 172800,
        shares: 0,
        buyingPower: this.props.currentUser.buying_power,
        currentStock: ""
      }
    } else {
      this.state = { 
        collapsed: true,
        start: new Date().setHours(6, 0, 0, 0) / 1000,
        now: new Date().setHours(13, 0, 0, 0) / 1000,
        shares: 0,
        buyingPower: this.props.currentUser.buying_power,
        currentStock: this.props.currentStock
       }
    }

    this.toggleDescription = this.toggleDescription.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

 

  componentDidMount() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)
    if (Object.keys(this.props.currentStock).length === 0) {
      // this.setState({currentStock: this.props.currentStock})
      // console.log('I just mounted and did the API calls')
      this.props.fetchStockInfo(this.props.match.params.symbol)
      .then(() => this.props.fetchStockData(this.props.match.params.symbol, this.state.start, this.state.now))
      .then(() => this.props.fetchStockNews(this.props.match.params.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0]))
      .then(() => this.props.fetchCurrentStock(this.props.match.params.symbol))
    }
    // this.props.fetchStockInfo(this.props.match.params.symbol)
    // .then(() => this.props.fetchStockData(this.props.match.params.symbol, this.state.start, this.state.now))
    // .then(() => this.props.fetchStockNews(this.props.match.params.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0]))

    // .then(() => this.props.fetchStockNews(this.props.match.params.symbol), '2021-03-01', '2021-03-09')
    // this.props.fetchStockInfo(this.props.match.params.symbol).then(() => this.props.fetchStockData(this.props.match.params.symbol, 1618318800, 1618361038))
  }

  shouldComponentUpdate(nextProps){
    return nextProps.currentStock !== this.props.currentStock;
  }

  componentDidUpdate(prevProps) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)
    // console.log("prevProps: ", prevProps.currentStock)
    // console.log("this.props: ", this.props.currentStock)

    if (prevProps.currentStock.stock !== this.props.currentStock.stock && Object.keys(this.props.currentStock).length !== 0 && Object.keys(prevProps.currentStock).length !== 0 ) {
      console.log("I just updated")
      // console.log('I just updated and did the API calls')
      this.props.fetchStockInfo(this.props.match.params.symbol)
      .then(() => this.props.fetchStockData(this.props.match.params.symbol, this.state.start, this.state.now))
      .then(() => this.props.fetchStockNews(this.props.match.params.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0]))
      .then(() => this.props.fetchCurrentStock(this.props.match.params.symbol))
    }
  }

  toggleDescription() {
    const currentState = this.state.collapsed;
    this.setState({ collapsed: !currentState });
    // console.log(this.state)
  }

  handleInput(type) {
    return (e) => 
    this.setState({[type]: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    let currentPrice = this.props.stock.data['c'][this.props.stock.data['c'].length - 1]
    this.setState({buyingPower: (this.state.buyingPower - (currentPrice * this.state.shares).toFixed(2)) })
    this.props.addStockAsset(this.props.stock.Symbol, this.props.currentUser.id, this.state.shares, (this.props.stock.data['c'][this.props.stock.data['c'].length - 1]).toFixed(2))
    .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUser.id))
  }

  isCollapsed() {
    if (this.state.collapsed) {
      return (
      <div>
        <div className="about-info-2">
          {this.props.stock.Description}
        </div>
        <button className="about-info-button" onClick={this.toggleDescription}>Read More</button>
      </div>
      )
    } else {
      return (
        <div>
          <div className="about-info-3">
            {this.props.stock.Description}
          </div> &nbsp;
          <button className="about-info-button" onClick={this.toggleDescription}>Read Less</button>
      </div>
      )
    }
  }

  isGood() {
    if ((this.props.stock.data['c'][this.props.stock.data['c'].length - 1] - this.props.stock.data['o'][0]).toFixed(2) >= 0) {
      return '+' + (this.props.stock.data['c'][this.props.stock.data['c'].length - 1] - this.props.stock.data['o'][0]).toFixed(2)
    } else {
      return (this.props.stock.data['c'][this.props.stock.data['c'].length - 1] - this.props.stock.data['o'][0]).toFixed(2)
    }
  }

  render() {
    
    if (this.props.stock === undefined || this.props.data === undefined || this.props.stock.news === undefined) {
      return (
        <div className="loading">
          <div className="loading-text">loading...</div>
          {/* <img className="loading-img" src="https://media1.tenor.com/images/b7e563cd1180cf061bf9980d52104fc9/tenor.gif?itemid=14700496" alt=""/> */}
        </div>
      )
    }
    let marketPrice = this.props.data['c'][this.props.data['c'].length - 1].toFixed(2)
    
    // if (this.props.data === undefined) {
    //   return (
    //     <div className="loading">
    //       <div className="loading-text">loading...</div>
    //       <img className="loading-img" src="https://media1.tenor.com/images/b7e563cd1180cf061bf9980d52104fc9/tenor.gif?itemid=14700496" alt=""/>
    //     </div>
    //   )
    // }

  

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

    let currentPrice = this.props.stock.data['c'][this.props.stock.data['c'].length - 1]
    let openPrice = this.props.stock.data['o'][0]

    let percentChange = (((currentPrice - openPrice) / openPrice) * 100).toFixed(2)

    const totalDollarAmount = () => {
      let total = 0;
      this.props.currentUser.stock_assets.forEach(obj => {
        total += (obj.amount * currentPrice)
      })
      return total
    }

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

    const portfolioDiversity = () => {
      let totalPortfolio = 0
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        totalPortfolio += asset.amount
      }
      return (totalAssets() / totalPortfolio).toFixed(2)
    }

    const portfolioDiversity2 = () => {
      let totalPortfolio = 0
      let totalStockPrice = 0
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        totalPortfolio += (asset.amount * asset.price)
        if (asset.ticker === this.props.stock.Symbol) {
          totalStockPrice += (asset.amount * asset.price)
        }
      }
      return ((totalStockPrice / totalPortfolio) * 100).toFixed(2)
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
                      ${numberWithCommas(totalAssets())}
                    </span>
                  </h2>
                </header>
                <table className="owned-assets-table">
                  <tbody className="owned-assets-table-1">
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Cost
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td className="owned-assets-table-4">
                        ${numberWithCommas(totalAssets())}
                      </td>
                    </tr>
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Today's Return
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td className="owned-assets-table-4">
                        ${((totalAssets() * percentChange) / 100).toFixed(2)} ({percentChange}%)
                      </td>
                    </tr>
                    <tr className="owned-assets-table-2">
                      <td className="owned-assets-table-3">
                        Total Return
                      </td>
                      <td className="owned-assets-table-filler"></td>
                      <td className="owned-assets-table-4">
                      ${((totalAssets() * percentChange) / 100).toFixed(2)} ({percentChange}%)
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
                      <td className="owned-assets-table-4">
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
        // console.log(asset)
        if (asset.ticker === this.props.stock.Symbol) {
          totalPrice += (asset.amount * asset.price)
        }
      }
      return totalPrice.toFixed(2)
    }

    // console.log(totalAssets())

    // console.log(this.props.data['c'][this.props.data['c'].length - 1])
    // console.log(this.props.stock.data)
    // console.log(this.props.data.Name)
    const showStock = () => {
      let companyName = this.props.stock.Name;
      if (!this.props.stock.Name) companyName = this.props.match.params.symbol
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
                                    <img className="related-lists-img-1" src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/-1617285526935.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" alt=""/>
                                  </div>
                                  <span className="related-lists-9">
                                    &nbsp;Stock
                                  </span>
                                </div>
                              </div>
                              <div className="related-lists-7-2">
                                <div className="related-lists-8-2">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/california/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="related-lists-10">
                                    &nbsp;Maybe California
                                  </span>
                                </div>
                              </div>
                              <div className="related-lists-7-3">
                                <div className="related-lists-8-3">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/portrait_48/1x.png" alt=""/>
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
                                      <img src="https://learnscrivenerfast.com/wp-content/uploads/2015/11/price-tag.png" alt=""/>
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
                                  {/* ${currentPrice.toFixed(2)} */}
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
                                
                                {/* <span className="about-info-2">
                                  {this.props.stock.Description}
                                </span> */}
                                {this.isCollapsed()}
                                {/* <button onClick={this.toggleDescription}>Read More</button> */}
                                
                                {/* <span className="about-info-3">
                                  {this.props.stock.Description}
                                </span> */}
                              </h3>
                            </div>

                            <div className="about-info-4">


                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    CEO
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  Joe
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Employees
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  {this.props.stock.FullTimeEmployees}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Headquarters
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  Joe
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Founded
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  Joe
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    {'Market Cap'.toUpperCase()}
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
                                  {this.props.stock.PERatio}
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
                                  {this.props.stock.DividendYield}
                                </div>
                              </div>

                              <div className="about-info-5">
                                <span className="about-info-6">
                                  <div className="about-info-7">
                                    Average Volume
                                  </div>
                                </span>
                                <div className="about-info-8">
                                </div>
                                <div className="about-info-7">
                                  Joe
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
                                    <img className="related-lists-img-1" src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/-1617285526935.jpg/EG11/thumbnail/750x422/format/jpg/quality/60" alt=""/>
                                  </div>
                                  <span className="related-lists-9">
                                    &nbsp;Stock
                                  </span>
                                </div>
                              </div>
                              <div className="related-lists-7-2">
                                <div className="related-lists-8-2">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/california/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="related-lists-10">
                                    &nbsp;Maybe California
                                  </span>
                                </div>
                              </div>
                              <div className="related-lists-7-3">
                                <div className="related-lists-8-3">
                                  <div className="related-lists-img">
                                    <img className="related-lists-img-1" src="https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="related-lists-11">
                                    &nbsp;100,000 Most Popular
                                  </span>
                                </div>
                              </div>
                            </div>
                          </section>

                          <StockNewsContainer symbol={this.props.match.params.symbol} />
  
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
                        />
                      {/* <div className="trade">
                        <div className="trade-1">
                          <div className="trade-2">
                            <form>
                              <div className="trade-stock-name">
                                <div className="trade-stock-name-1">
                                  <div className="trade-stock-name-2">
                                    <span className="trade-stock-name-3">
                                      Buy {this.props.stock.Symbol}
                                    </span>
                                  </div>

                                  <div className="trade-stock-name-2">
                                  <span className="trade-stock-name-3">
                                      Sell {this.props.stock.Symbol}
                                    </span>
                                  </div>

                                </div>
                              </div>
                              <div className="trade-stock-shares">
                                <div className="trade-stock-shares-1">
                                  <div className="trade-stock-shares-2">
                                    <div className="trade-stock-shares-3">
                                      <label className="trade-stock-shares-4">
                                        Invest in
                                      </label>
                                      <div className="trade-stock-shares-5">
                                        <div className="trade-stock-shares-6">
                                          <div className="trade-stock-shares-7">
                                            <div className="trade-stock-shares-8">
                                              <button type="button" className="trade-stock-shares-9">
                                                <div className="trade-stock-shares-10">
                                                  <span className="trade-stock-shares-11">
                                                    Shares
                                                  </span>
                                                </div>
                                                <div className="trade-stock-shares-12">
                                                  <span className="trade-stock-shares-13">
                                                  △
                                                  ▽
                                                    
                                                  </span>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="shares-amount">
                                      <label className="shares-amount-1">
                                        Shares
                                      </label>
                                      <div className="shares-amount-2">
                                        <div className="shares-amount-3">
                                          
                                          <input className="shares-amount-input" value={this.state.shares} onChange={this.handleInput('shares')} type="text" placeholder="0"/>
                                          
                                        </div>
                                      </div>
                                    </div>

                                    <div className="trade-market-price">
                                      <div className="trade-market-price-1">
                                        <a className="trade-market-price-2">
                                          <span className="trade-market-price-3">
                                            Market Price
                                          </span>
                                        </a>
                                      </div>
                                      <div className="trade-market-price-4">
                                        <span className="trade-market-price-5">
                                        ${this.props.data['c'][this.props.data['c'].length - 1].toFixed(2)}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="trade-estimated-cost">
                                      <div className="trade-estimated-cost-1">
                                        <div className="trade-estimated-cost-2">
                                          <span className="trade-estimated-cost-3">
                                            Estimated Cost
                                          </span>
                                        </div>
                                        <div className="trade-estimated-cost-4">
                                          <span className="trade-estimated-cost-5">
                                            ${(currentPrice * this.state.shares).toFixed(2)}
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>

                              <div className="review-order">
                                <div className="review-order-1">
                                  <div className="review-order-2">
                                    <div className="review-order-3">
                                      <div className="review-order-4">
                                        <button onClick={this.handleClick} className="review-order-5">
                                          <div className="review-order-6">
                                            <span className="review-order-7">
                                              Complete Order
                                            </span>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <footer className="money-available">
                                <div className="money-available-1">
                                  <span className="money-available-2">
                                    <div className="money-available-3">
                                      ${this.props.currentUser.buying_power} Buying Power Available
                                    </div>
                                  </span>
                                </div>
                              </footer>

                            </form>
                          </div>

                          <div className="add-list">
                            <div className="add-list-1"></div>
                            <div className="add-list-2">
                              <button className="add-list-3">
                                <div className="add-list-4">
                                  <span className="add-list-5">
                                    <span className="add-list-6">
                                      <span className="add-list-7">
                                      ✓ Add to Lists
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </button>
                            </div>
                          </div>

                        </div>
                      </div> */}

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


        {/* <div className="add-watch-list">
          <section className="add-watch-list-1">
            <div className="add-watch-list-2">
              <header className="add-watch-list-header">
                <h1 className="add-watch-list-header-1">
                  <span className="add-watch-list-header-2">
                    Add {this.props.stock.Symbol} to Your Lists
                  </span>
                </h1>
                <button className="add-watch-list-header-x">
                  <div className="add-watch-list-header-x-1">
                    <img className="add-watch-list-header-x-2" src="https://i.imgur.com/rmBxqXX.png" />
                  </div>
                </button>
              </header>
              <div>
                <div className="add-watch-list-3">

                </div>
              </div>
            </div>
          </section>
        </div> */}
        <StockPageWatchList watcherId={this.props.currentUser.id} addWatchedAsset={this.props.addWatchedAsset} stock={this.props.stock} watchedAssets={this.props.watchedAssets} ticker={this.props.stock.Symbol} />


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