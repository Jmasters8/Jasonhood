import React from 'react';
import { Link } from 'react-router-dom'


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    
    this.user = null

    for (let key in this.props.user) {
      this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    }
  }
  
  render() {

  const LoggedIn = () => {
    return (
      <div>
        <h1>hello look me stonks, my name {this.user}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
    
  const loggedOut = () => {
    return (
      <div className="home">
        
        <div className="home-header-1">

        </div>

        <header>
          <div className="nav-header">
            <nav className="nav">
              <div className="main-nav">
                <div className="nav-img">
                  <img src="https://i.imgur.com/dFBjF3N.jpg"/>
                </div>
                <div className="outer-nav-links">
                <div className="nav-links">
                  <Link to="/login" className="log-in-link">Log in</Link>
                  &nbsp;
                  <Link to="/signup" className="sign-up-link">Sign up</Link>
                </div>
                </div>

              </div>
            </nav>
          </div>
        </header>

      <div className="test">
        <div className="home-section">
          <div className="home-section-1">
            <div className="home-section-1-2">
              <div className="home-section-1-3">
                <div className="home-section-1-4">
                  <div className="home-section-1-5">

                    <div className="home-section-1-text-1">
                      <h1>Investing for Everyone</h1>
                    </div>

                    <div className="home-section-1-text-2">
                      <span>Commission-free investing, plus the tools
                      you need to put your money in motion. Sign
                      up and get your first stock for free. Certain
                      limitations apply.
                      </span>
                    </div>

                    <div className="home-section-1-bt-1">
                      <div className="home-section-1-bt-2">
                        <div className="home-section-1-bt-3">
                          <Link className="home-section-1-bt-4" to="/signup"><span>Sign Up</span></Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="home-section-2">
                  <div className="home-section-2-1">
                    <div className="home-section-2-2">

                      <img src="https://i.imgur.com/X3Q8wjC.png" alt=""/>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        <section className="home-section-3">
          <div className="home-section-3-1">
            <div className="home-section-3-2">
              <div className="home-section-3-3"></div>
              <div className="home-section-3-4">
                <div className="home-section-3-5">
                  <p className="home-section-3-6">
                    <span className="home-section-3-7">
                      See our fee schedule to learn more about cost.
                    </span>
                  </p>
                </div>
              </div>
              <div className="home-section-3-3"></div>
            </div>
          </div>
        </section>

        </div>
        </div>
      </div>
    )
  }


  return this.props.currentUser ? LoggedIn() : loggedOut()
  }
} 


export default HomePage;



