import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
    this.props.login(user)
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
              <input type="text" value={this.state.email} onChange={this.handleInput('password')} placeholder="Password"/>
            </label>
          </div>

        </form>
      </div>
    )
  }
}

export default LoginForm;