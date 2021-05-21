import React from 'react';

class StockForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shares: "",
      buyingPower: this.props.buyingPower,
      transaction: "buy",
      showBuyError: false,
      showSellError: false
    }

    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
    // this.toggleTransaction = this.toggleTransaction.bind(this)
    this.toggleBuy = this.toggleBuy.bind(this);
    this.toggleSell = this.toggleSell.bind(this);
  }

  handleInput(type) {
    return (e) =>
      this.setState({ [type]: e.target.value })
  }

  // toggleTransaction() {
  //   if (this.state.transaction === "buy") {
  //     this.setState({transaction: "sell", shares: "", showBuyError: false, showSellError: false})
  //   } else if (this.state.transaction === "sell") {
  //     this.setState({transaction: "buy", shares: "", showBuyError: false, showSellError: false})
  //   }
  // }

  toggleBuy() {
    if (this.state.transaction === "sell") {
      this.setState({transaction: "buy", shares: "", showBuyError: false, showSellError: false})
    }
  }

  toggleSell() {
    if (this.state.transaction === "buy") {
      this.setState({transaction: "sell", shares: "", showBuyError: false, showSellError: false})
    }
  }

  showBuyError() {
    if (!this.state.showBuyError) return null
    return (
      <div className="stock-errors">
        <span className="stock-errors-1">
          Not Enough Buying Power
        </span>
      </div>
    )
  }

  handleBuy(e) {
    e.preventDefault();
    if ((this.props.currentPrice * this.state.shares).toFixed(2) > this.state.buyingPower) {
      this.setState({showBuyError: !this.state.showBuyError})
      this.showBuyError()
      return null
    }
    console.log(this.state)
    this.setState({ buyingPower: (this.state.buyingPower - (this.props.currentPrice * this.state.shares).toFixed(2)) })
    
    this.props.addStockAsset(this.props.symbol, this.props.currentUserId, this.state.shares, this.props.currentPrice.toFixed(2))
      .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUserId))
    this.setState({shares: "", showBuyError: false})
    console.log(this.state)
  }

  handleSell(sharesAmount) {
    let sellShares = () => {
      if ((sharesAmount < this.state.shares)) {
        this.setState({showSellError: !this.state.showSellError})
        this.showSellError();
        return null
      }

      let assets = Object.values(this.props.assets);
      let shares = this.state.shares

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
    
        if (asset.ticker === this.props.symbol) {
          if (asset.amount === shares) {
            // delete this.props.assets[asset.id]
            this.setState({ buyingPower: (this.state.buyingPower + parseInt((this.props.currentPrice * asset.amount).toFixed(2))) })
            this.props.deleteStockAsset(this.props.currentUserId, asset.id)
            .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUserId)) 
            return 
          }
        }
    
        if (asset.ticker === this.props.symbol) {
          
          if (asset.amount > shares) {
            // this.props.assets[asset.id].amount -= shares;
            this.setState({ buyingPower: (this.state.buyingPower + parseInt((this.props.currentPrice * shares).toFixed(2))) })
            this.props.updateStockAmount((this.props.assets[asset.id].amount - shares), asset.id)
            .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUserId)) 
            return
          }
        }
    
        if (asset.ticker === this.props.symbol && shares !== 0) {
          if (shares - asset.amount >= 0) {
            shares -= asset.amount;
            // delete this.props.assets[asset.id];
            this.setState({ buyingPower: (this.state.buyingPower + parseInt((this.props.currentPrice * asset.amount).toFixed(2))) })
            this.props.deleteStockAsset(this.props.currentUserId, asset.id)
            .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUserId)) 
          }
        }
      }
    }
    sellShares()
   
  
    // this.setState({ buyingPower: (this.state.buyingPower + parseInt((this.props.currentPrice * this.state.shares).toFixed(2))) })
    // this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUserId)
   
    // this.props.updateBuyingPower((this.state.buyingPower + parseInt((this.props.currentPrice * this.state.shares).toFixed(2))), this.props.currentUserId)
    this.setState({shares: "", showSellError: false})
  
    
    // this.props.deleteStockAsset(this.props.currentUserId, 69)
    // .then(() => this.props.updateBuyingPower(this.state.buyingPower, this.props.currentUserId))

    

    
    // this.props.updateStockAmount(2, 20)
  }

  sellAll(sharesAmount) {
    this.setState({shares: sharesAmount})
  }

  render() {
    
    let sharesAmount = 0;
    let assets = Object.values(this.props.assets);
    assets.forEach(asset => {
      if (this.props.symbol === asset.ticker && asset.ticker !== null) {
        sharesAmount += asset.amount
      }
    })
    // this.props.assets[49].amount -= 3

    if (this.state.transaction === "buy") {
      return (
        <div className="trade">
          <div className="trade-1">
            <div className="trade-2">
              <form>
                <div className="trade-stock-name">
                  <div className="trade-stock-name-1">
                    <div className="trade-stock-name-2">
                      <span onClick={this.toggleBuy} className="trade-stock-name-toggled">
                        Buy {this.props.symbol}
                      </span>
                    </div>

                    <div className="trade-stock-name-2">
                      <span onClick={this.toggleSell} className="trade-stock-name-3">
                        Sell {this.props.symbol}
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
                                    {/* <img src="https://listimg.pinclipart.com/picdir/s/71-715206_upside-down-triangle-outline-clipart.png" alt=""/> */}
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

                            <input className="shares-amount-input" value={this.state.shares} onChange={this.handleInput('shares')} type="text" placeholder="0" />

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
                            ${this.props.marketPrice}
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
                              ${(this.props.currentPrice * this.state.shares).toFixed(2)}
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
                          <button onClick={this.handleBuy} className="review-order-5">
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
                        ${this.props.currentUserBuyingPower} Buying Power Available
                      </div>
                    </span>
                  </div>
                  {/* <div>
                    <span>
                      not enough monies
                    </span>
                  </div> */}
                  {this.showBuyError()}
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
        </div>
      )
    } else {
      return (
        <div className="trade">
          <div className="trade-1">
            <div className="trade-2">
              <form>
                <div className="trade-stock-name">
                  <div className="trade-stock-name-1">
                    <div className="trade-stock-name-2">
                      <span onClick={this.toggleBuy} className="trade-stock-name-3">
                        Buy {this.props.symbol}
                      </span>
                    </div>

                    <div className="trade-stock-name-2">
                      <span onClick={this.toggleSell} className="trade-stock-name-toggled">
                        Sell {this.props.symbol}
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
                                    {/* <img src="https://listimg.pinclipart.com/picdir/s/71-715206_upside-down-triangle-outline-clipart.png" alt=""/> */}
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

                            <input className="shares-amount-input" value={this.state.shares} onChange={this.handleInput('shares')} type="text" placeholder="0" />

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
                            ${this.props.marketPrice}
                          </span>
                        </div>
                      </div>
                      <div className="trade-estimated-cost">
                        <div className="trade-estimated-cost-1">
                          <div className="trade-estimated-cost-2">
                            <span className="trade-estimated-cost-3">
                              Estimated Credit
                          </span>
                          </div>
                          <div className="trade-estimated-cost-4">
                            <span className="trade-estimated-cost-5">
                              ${(this.props.currentPrice * this.state.shares).toFixed(2)}
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
                          <button onClick={() => this.handleSell(sharesAmount)} className="review-order-5">
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
                      <div className="shares-available-2">
                        {sharesAmount} Shares Available - 
                        &nbsp;
                        <span onClick={() => this.sellAll(sharesAmount)} className="shares-available-3"> Sell All</span>
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
        </div>
      )
    }
  }
}

export default StockForm;