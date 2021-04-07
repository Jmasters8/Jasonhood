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
                    <div className="home-section-1-text">
                      <h1>Investing for</h1>
                      <h1>Everyone</h1>
                      <h2>Commission-free investing, plus the tools</h2>
                      <h2>you need to put your money in motion. Sign</h2>
                      <h2>up and get your first stock for free. Certain</h2>
                      <h2>limitations apply.</h2>
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