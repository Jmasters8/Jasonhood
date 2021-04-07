import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props)

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleInput(type) {
    return (e) => 
      this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.login(user).then(() => this.props.history.push('/'))
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { email: 'demo@demo.net', password: '12345678910'};
    this.props.login(demoUser).then(() => this.props.history.push('/'))
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
      <div className="login-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        
          <header className="login-header">
            <span className="login-header-text">Welcome to Robinhood</span>
          </header>

          <div className="login-email">
            <label className="input-labels">Email or username
              <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Email"/>
            </label>
          </div>

          <div className="login-password">
            <label className="input-labels">Password
              <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Password"/>
            </label>
          </div>

          {this.renderErrors()}
          <input type="submit" value="Sign in"/>

          <button onClick={this.handleDemo}>
            Demo
          </button>

          <p>Don't have an account yet? <Link to="/signup">Sign up</Link></p>

        </form>
      </div>
    )
  }
}

export default LoginForm;