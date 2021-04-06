import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {user: {
      email: "",
      first_name: "",
      last_name: "",
      password: ""
    }};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.signup(this.state).then(() => this.props.history.push('/'));
    this.props.signup(this.state)
  }

  render() {
    return (
      <div className='session-form'>
        <span className="signup-title">Make Your Money Move</span>
        <span className="signup-subtitle">Robinhood lets you invest in companies you love, commission-free.</span>
        <br/>
        <p className="signup-enter">Please enter your full legal name. Your legal name should match any form of government ID.</p>
        <form>
          <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
          <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
          <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
          <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>

          <button onClick={this.handleSubmit}>Continue</button>
          </form>
      </div>
    );
  }
};

export default Signup;