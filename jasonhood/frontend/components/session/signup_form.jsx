import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => 
      this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.signup(user).then(() => this.props.history.push('/'))
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.signupErrors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  renderErrors() {
    return (
      <ul>
        {this.props.signupErrors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (

      <div className='signup-form'>
        <div className="signup-form-1">
          <div className="signup-form-2">
            <div className="signup-form-3">
              <div className="signup-form-4">
                <img height="35" width="142" viewBox="0 0 142 35" src="https://i.imgur.com/dFBjF3N.jpg" alt=""/>
              </div>
              <div className="signup-form-5">
                <div className="signup-form-6">
                  <span className="signup-form-7">Make Your Money Move</span>
                </div>
                <div className="signup-form-8">
                  <div className="signup-form-9">
                    <span className="signup-form-10">
                      Jasonhood lets you invest in companies you love, commission free.
                    </span>
                  </div>
                </div>
              </div>

            <div className="signup-form-11">
              <div className="signup-form-12">
                <span className="signup-form-13">
                  Please enter your full legal name.
                  Your legal name should match any form of government ID.
                </span>
              </div>

              <form className="signup-form-14">
                <div className="signup-names">
                  <div className="signup-input-first-name">
                    <div className="signup-input-first-name-1">
                      <input className="signup-input-first-name-2" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} placeholder="First Name"/>
                    </div>
                  </div>

                  <div className="signup-input-last-name">
                    <div className="signup-input-last-name-1">
                    <input className="signup-input-last-name-2" type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} placeholder="Last Name"/>
                    </div>
                  </div>
                </div>

                <div className="signup-email">
                  <div className="signup-email-1">
                    <input className="signup-email-2" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
                  </div>
                </div>

                <div className="signup-password">
                  <div className="signup-password-1">
                  <input className="signup-password-3" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password"/>
                  </div>
                </div>

                <div className="signup-button">
                  <div className="signup-button-1">
                    <div className="signup-button-2">
                      <button className="signup-button-3" onClick={this.handleSubmit}>
                        <div className="signup-button-4">
                          <span className="signup-button-5">Continue</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="signup-text">
                    <span className="signup-text-1">Already started?</span>
                    <br/>
                    <span className="signup-text-2">
                      <Link to="/login" className="signup-text-3">Log in to complete your application</Link>
                    </span>
                  </div>

                </div>
                <ul className="signup-errors">
                  {this.renderErrors()}
                </ul>

              </form>
            </div>

            <div className="signup-bottom-text">
              <div className="signup-bottom-text-1">
                <div className="signup-bottom-text-2">
                  <div className="signup-bottom-text-3">

                    <div className="signup-bottom-text-4">
                      All investments involve risk, including the
                      possible loss of principal. Investors should
                      consider their investment objectives and
                      risks carefully before investing.
                    </div>
                    <div className="signup-bottom-text-4">
                      Commission-free trading means $0 commission trading
                      on self-directed individual cash or margin brokerage
                      accounts that trade U.S. listed securities via mobile
                      devices or web. Keep in mind, other fees such as
                      trading (non-commission) fees, Gold subscription fees,
                      wire transfer fees, and paper statement fees may apply
                      to your brokerage account. Please see Jasonhood Financial’s
                      <a> fee schedule </a>to learn more.
                    </div>
                    <div className="signup-bottom-text-4">
                      Securities trading offered through Jasonhood Financial LLC.
                      Brokerage clearing services offered through Jasonhood
                      Securities, LLC. Both are subsidiaries of Jasonhood Markets, Inc.
                    </div>
                    <div className="signup-bottom-text-4">
                      <a>
                        Check the background of Jasonhood Financial LLC and Jasonhood
                        Securities, LLC on FINRA’s BrokerCheck.
                      </a>
                    </div>
                    <div className="signup-bottom-text-4">
                      <a>
                        Jasonhood Terms and Conditions
                      </a>
                      &nbsp;&nbsp;
                      <a>
                        Disclosure Library
                      </a>
                      &nbsp;&nbsp;
                      <a>
                        Contact us
                      </a>
                      &nbsp;&nbsp;
                      <a>
                        FAQ
                      </a>
                    </div>

                    <div className="signup-bottom-text-4">
                      © 2020 Jasonhood. All rights reserved.
                    </div>


                  </div>
                </div>
              </div>
            </div>

            </div>
          </div>

          <div className="signup-right">
            <div className="signup-right-text">

              <div className="signup-right-text-1">
                <span className="signup-right-text-title">Comission-free trading</span>
              </div>

              <div>
                <span className="signup-right-text-p">
                  Break free from commission-fees and make unlimited
                  commission-free trades in stocks, funds, and options
                  with Jasonhood Financial. Other fees may apply. View our
                  <a> fee schedule </a>to learn more.
                </span>
              </div>

              <div className="signup-right-text-2">
                <span className="signup-right-text-title">
                  Account Protection
                </span>
              </div>

              <div>
                <span className="signup-right-text-p">
                Jasonhood Financial is a member of SIPC. Securities in your
                account protected up to $500,000. For details, please see <a>www.sipc.org</a>
                </span>
              </div>

              <div className="signup-right-text-2">
                <span className="signup-right-text-title">
                  Stay on top of your portfolio
                </span>
              </div>

              <div>
                <span className="signup-right-text-p">
                  Set up customized news and notifications to stay
                  on top of your assets as casually or as relentlessly as you 
                  like. Controlling the flow of info is up to you.
                </span>
              </div>

            </div>
          </div>

        </div>














        {/* <span className="signup-title">Make Your Money Move</span>
        <span className="signup-subtitle">Robinhood lets you invest in companies you love, commission-free.</span>
        <br/>
        <p className="signup-enter">Please enter your full legal name. Your legal name should match any form of government ID.</p> */}
        {/* <form onSubmit={this.handleSubmit}>
          <div className="signup-left">
            <div className="signup-left-textbox">

              <span className="signup-left-textbox-1">Make Your Money Move</span>
              <span className="signup-left-textbox-2">Robinhood lets you invest in companies you love, commission-free.</span>
              <span className="signup-left-textbox-3">Please enter your full legal name. Your legal name should match any form of government ID.</span>
              <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} placeholder="First Name"/>
              <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} placeholder="Last Name"/>
              <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password"/>

              <div className="signup-left-buttons">
                <div className="signup-left-button-1">
                  <button onClick={this.handleSubmit}>Continue</button>
                </div>

                <div className="signup-left-button-2">
                  <div>Already started?</div>
                  <div>
                    <Link to="/login" className="signup-left-login-button">Log in to complete your application</Link>

                    <div className="signup-errors">
                      {this.renderErrors()}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form> */}


      </div>
    );
  }
};

export default SignupForm;