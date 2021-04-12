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
                      </div>
                    </main>
                  </div>
                </div>
              </div>
  
  {/* <GraphContainer stock={this.props.stock} /> */}
  
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