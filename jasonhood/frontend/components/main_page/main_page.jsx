import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import GraphContainer from '../graph/graph_container';


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.user = null
    for (let key in this.props.user) {
      this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    }

    // this.state = {
    //   stockSymbol: ""
    // }

    // this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="main">
        <div className="main-filler">
          <div className="main-filler-1">
          </div>
        </div>

        <div className="main-1">
          <div className="main-2">
            <div className="main-3">
              <div className="dashboard-4">
                <main className="dashboard-5">
                  <div className="dashboard-6">
                    <div className="left-1">
                      <section className="left-2">
                        <header className="left-3">
                          <div className="left-4">
                            <h1 className="left-4-header">
                              $500,000.88
                            </h1>
                          </div>
                          <div className="left-5">
                            <span className="left-6">
                              +$1,000.88
                            </span>&nbsp;
                            <span className="left-6">
                              (+2.23%)
                            </span>&nbsp;
                            <span className="left-7">
                              Today
                            </span>
                          </div>
                        </header>
                        <div className="dashboard-graph">

                        </div>
                      </section>
                      <div className="dashboard-buying-power">
                        <div className="dashboard-buying-power-1">

                        </div>
                      </div>
                    </div>
                    
                  </div>
                </main>
              </div>
            </div>



            <NavbarContainer />




          </div>
        </div>
        
      </div>
    )
  }
}

export default MainPage;




{/* <div className="main-content">
                      <div className="main-content-1">
                        <header className="main-content-header">
                          <div className="main-content-header-1">
                            <h1 className="main-content-header-2">NIO</h1>
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
                            
                            <div className="main-graph">
                              <GraphContainer />
                            </div>

                          </header>
                        </section>

                      </div>
                    </div> */}

        //             <div className="analysis-hover">
        //   <span className="analysis-hover-text">
        //     61% of analysts rate stock as a buy
        //   </span>
        // </div>