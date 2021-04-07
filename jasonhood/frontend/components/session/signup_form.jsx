import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      password: ""
    };
    console.log('signup errors = ', this.props.errors)
   
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
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
        {/* <span className="signup-title">Make Your Money Move</span>
        <span className="signup-subtitle">Robinhood lets you invest in companies you love, commission-free.</span>
        <br/>
        <p className="signup-enter">Please enter your full legal name. Your legal name should match any form of government ID.</p> */}
        <form onSubmit={this.handleSubmit}>
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
        </form>


      </div>
    );
  }
};

export default SignupForm;