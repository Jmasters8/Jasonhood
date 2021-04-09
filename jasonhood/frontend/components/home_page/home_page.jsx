import React from 'react';
import { Link } from 'react-router-dom'
import MainPageContainer from '../main_page/main_page_container'


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.user = null

    for (let key in this.props.user) {
      this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    }
  }


  
  render() {

  const LoggedIn = () => {
    return (
      <div>
        <MainPageContainer />
      </div>
    )
  }
    
  const loggedOut = () => {


    return (
      <div className="home">
        
        <div className="home-header-1">
          <nav className="home-header-2">
            <div className="home-header-3">
              <a href="">
                <img className="home-header-4" src="https://i.imgur.com/dFBjF3N.jpg" alt=""/>
              </a>

              <div className="home-header-5">
                <ul className="home-header-6">
                  <li className="home-header-7"><span>Products</span></li>
                  <li className="home-header-7"><span>Learn</span></li>
                  <li className="home-header-7"><span>Support</span></li>
                  <li className="home-header-7"><span>Who we are</span></li>
                </ul>
              </div>
              <div className="home-header-8"></div>
              <div className="home-header-9">
                <Link to="/login" className="log-in-link"><span>Log in</span></Link>
              </div>
              <div className="home-header-10">
                <Link to="/signup" className="sign-up-link">Sign up</Link>
              </div>

            </div>
          </nav>
        </div>

        {/* <header>
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
        </header> */}

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

                      <video height="563px" width="650px" className="video-1" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline="" preload="auto">
                        <source className="img-1"src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__327bf4cc768a323497d5aaa7416319c2.mp4" type="video/mp4"/>
                        <img draggable="false" role="presentation" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png"
                          srcSet="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/1x__36a396f664677ed80a2459d1dca75f00.png, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__c7dcadbbb72fc298e85e94844f68342c.png 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/3x__7c5da6ba049983f3558423906f16f0af.png 3x"/>
                      </video>
                      <img className="video-img" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/2x__ff9c36e27d7018cf707b95d8675793a3.png" alt=""/>

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

        <section className="home-section-4">
          <div className="home-section-4-1">

          <video className="video-2" autoPlay controlsList="nodownload nofullscreen noremoteplayback" loop muted playsInline="" preload="auto">
            <source src="https://cdn.robinhood.com/assets/superbowl/superbowl.mp4" type="video/mp4"/>
            <img draggable="false" role="presentation" src="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/about-us1x__2d77af53475dc4e405ba9b0a4c8820fc.jpg" srcset="https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/about-us1x__2d77af53475dc4e405ba9b0a4c8820fc.jpg, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/about-us2x__c7695a4218c85aeb29e5c5d6203ac4d7.jpg 2x, https://cdn.robinhood.com/assets/robinhood/brand/_next/static/images/about-us3x__0daf4c1a879b02e4a61aa38be0fcebe4.jpg 3x"></img>
          </video>

          </div>

          <div className="home-section-4-2">
            <div className="home-section-4-3"> 
              
              <div className="home-section-4-filler-1"></div>
              <div className="home-section-4-filler-2"></div>
        
              <div className="home-section-4-4">
                <div className="home-section-4-5">
                  <div className="home-section-4-6">
                    <h1>We are all investors.</h1>
                  </div>
                  <div className="home-section-4-7">
                    <div className="home-section-4-8"> 
                      <span>See the campaign</span>
                      <img className="arrow" src="https://image.flaticon.com/icons/png/512/25/25346.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>


        <div className="home-section-5-fractional-shares">
          <header className="home-section-5-1">
            <div className="home-section-5-2"></div>
            <div className="home-section-5-3">
            <img className="home-section-5-img-1" src="https://i.imgur.com/4xYbAtF.png" alt=""/>

              <div className="home-section-5-4">  {/*same*/}
                <div className="home-section-5-5">
                  <div className="home-section-5-6">
                    <h2 className="home-section-5-7">
                      <span className="home-section-5-8">
                        Introducing Fractional Shares
                      </span>
                    </h2>
                    <div className="home-section-5-9">
                      <span className="home-section-5-10">
                        <span>
                          Invest in thousands of stocks with as little as $1.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="home-section-5-img">
                  <img className="home-section-5-img-1" src="https://i.imgur.com/4xYbAtF.png" alt=""/>
                </div>

              </div>

              <div className="home-section-5-11">

                <div className="home-section-5-12">
                  <div className="home-section-5-text-blocks">
                    <div className="home-section-5-text-blocks-2">
                      <span className="home-section-5-text-blocks-3">
                        Invest Any Amount
                      </span>
                    </div>
                    <span className="home-section-5-text-blocks-4">
                      Choose how much you want to invest, and we’ll convert
                      from dollars to parts of a whole share.
                    </span>
                  </div>
                </div>

                <div className="home-section-5-12">
                  <div className="home-section-5-text-blocks">
                    <div className="home-section-5-text-blocks-2">
                      <span className="home-section-5-text-blocks-3">
                        Build a Balanced Portfolio
                      </span>
                    </div>
                    <span className="home-section-5-text-blocks-4">
                      Customize your portfolio with pieces of different
                      companies and funds to help reduce risk.
                    </span>
                  </div>
                </div>

                <div className="home-section-5-12">
                  <div className="home-section-5-text-blocks">
                    <div className="home-section-5-text-blocks-2">
                      <span className="home-section-5-text-blocks-3">
                        Trade in Real Time
                      </span>
                    </div>
                    <span className="home-section-5-text-blocks-4">
                      Trades placed during market hours are executed
                      at that time, so you’ll always know the share price.
                    </span>
                  </div>
                </div>

              </div>

              <div className="disclosure">
                <div className="disclosure-1">
                  <div className="disclosure-2">
                    <button className="disclosure-3">
                      <span className="disclosure-4">
                        <span className="disclosure-img">
                          <img className="disclosure-img-1" src="https://www.thesslstore.com/blog/wp-content/uploads/2017/05/circle-with-i-1.png" alt=""/>
                        </span>
                        <span className="disclosure-text">
                          <span className="disclosure-text-1">
                            Fractional Shares Disclosure
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </header>
        </div>


        </div>
        </div>
      </div>
    )
  }


  return this.props.currentUser ? LoggedIn() : loggedOut()
  }
} 


export default HomePage;




<div className="home-section-4-4">
                <div className="home-section-4-5">
                  <div className="home-section-4-6">
                    <h1>We are all investors.</h1>
                  </div>
                </div>
              </div>