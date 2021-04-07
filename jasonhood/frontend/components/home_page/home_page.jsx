import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props)

  }
  

  render() {
    
    return (
      
      <div className="home">
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

        <div className="home-section">
          <div className="home-section-1">
            <div className="home-section-1-2">
              <div className="home-section1-3">
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
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;