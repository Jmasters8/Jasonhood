import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import GraphContainer from '../graph/graph_container';


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    // this.user = null
    // for (let key in this.props.user) {
    //   this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    // }

    this.state = {
      stockSymbol: "",
      buyingPower: 0
      // buyingPower: this.props.user.buyingPower
    }
    this.handleClick = this.handleClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateBuyingPower(this.state.buyingPower, this.props.user.id)
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
                          <button className="dashboard-buying-power-2">
                            <header className="dashboard-buying-power-3">
                              <div className="dashboard-buying-power-4">
                                <span className="dashboard-buying-power-5">
                                  Buying Power
                                </span>
                                <span className="dashboard-buying-power-6">
                                  <span className="dashboard-buying-power-5">
                                  
                                    ${this.props.user.buying_power}
                                  </span>
                                </span>
                              </div>
                            </header>
                          </button>
                          <div className="dash-toggle">
                            <div className="dash-toggle-1">
                              <div className="dash-toggle-2">
                                <div className="dash-toggle-3">
                                  <div className="dash-toggle-4">
                                    <div className="dash-toggle-5">
                                      <table className="dash-toggle-6">
                                        <tbody>
                                          <tr className="dash-toggle-7">
                                            <td className="dash-toggle-8">
                                              <span className="dash-toggle-9">
                                                Brokerage Cash
                                              </span>
                                            </td>
                                            <td className="dash-filler"></td>
                                            <td className="dash-toggle-10">
                                              <span className="dash-toggle-9">
                                                A lot
                                              </span>
                                            </td>
                                          </tr>
                                          <tr className="dash-toggle-7-1">
                                            <td className="dash-toggle-8-1">
                                              <span className="dash-toggle-9">
                                                Buying Power
                                              </span>
                                            </td>
                                            <td className="dash-filler"></td>
                                            <td className="dash-toggle-10">
                                              <span className="dash-toggle-9">
                                                ${this.props.user.buying_power}
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    
                                    <div className="dash-toggle-input">
                                      <label className="dash-toggle-input-0-0">
                                        Amount

                                        <input className="dash-toggle-input-0" value={this.state.buyingPower} onChange={this.handleInput('buyingPower')} placeholder="$0.00" type="text"/>
                                      </label>
                                    </div>
                                    <div className="dash-toggle-input-1">
                                      <div className="dash-toggle-input-2">
                                        <button onClick={this.handleClick} className="dash-toggle-input-3">
                                          <div className="dash-toggle-input-4">
                                            <span className="dash-toggle-input-5">
                                              Deposit Funds
                                            </span>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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