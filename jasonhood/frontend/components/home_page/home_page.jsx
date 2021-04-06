import React from 'react';

class HomePage extends React.Component {
  

  render() {
    return (
      <div className="home">
        <header>
          <div className="nav-header">
            <nav className="nav">
              <div className="main-nav">
                <img src="https://camo.githubusercontent.com/6c0c0f49f30696ca993b4f2058779841cc005f01fbefb71f8e3e8fc5d9c362a3/68747470733a2f2f692e696d6775722e636f6d2f634d796e45377a2e6a7067" alt=""/>
              </div>
            </nav>
          </div>
        </header>
        <div className="home-section-1">
          <div>
            <h1>Investing for</h1>
            <h1>Everyone</h1>
            <h2>Commission-free investing, plus the tools</h2>
            <h2>you need to put your money in motion. Sign</h2>
            <h2>up and get your first stock for free. Certain</h2>
            <h2>limitations apply.</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;