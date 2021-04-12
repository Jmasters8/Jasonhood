import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import GraphContainer from '../graph/graph_container';

class Stock extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchStockInfoTest(this.props.match.params.symbol)
  }


  render() {
    // console.log(this.props.stock)
    const showStock = () => {
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
  
                      </div>
                      <div className="main-content">
                        <div className="main-content-1">
                          <header className="main-content-header">
                            <div className="main-content-header-1">
                              <h1 className="main-content-header-2">STOCK</h1>
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
                                    $38.05
                                  </span>
                                </h1>
                              </div>
  
                              <div className="price-change">
                                <span className="price-change-today">
                                  <span>
                                    -$0.58
                                  </span>
                                  <span className="price-change-today-span-2">
                                    (-$1.50%)
                                  </span>
                                </span>
                                <span className="price-change-today-1">Today</span>
                              </div>
                              
                            </header>

                            <div className="main-graph">
                              <div className="main-graph-1">
                                <div className="main-graph-2">
                                  <GraphContainer stock={this.props.stock} />
                                </div>
                              </div>
                            </div>

                          </section>
  
                        </div>

                      <div className="trade">
                        <div className="trade-1">
                          <div className="trade-2">
                            <form>
                              <div className="trade-stock-name">
                                <div className="trade-stock-name-1">
                                  <div className="trade-stock-name-2">
                                    <span className="trade-stock-name-3">
                                      Buy STOC
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
                                              <button className="trade-stock-shares-9">
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
                                          <input className="shares-amount-input" type="text" placeholder="0"/>
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
                                          $88.88
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
                                            $12.00
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
                                        <button className="review-order-5">
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
                                      $17.82 Buying Power Available
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