import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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

    let email = "MaidMarian4evr@gmail.com".split("");
    let password = "stonks12345".split("")
    
    setTimeout(() => {
      this.demoSignIn(email, password)
    }, 500)
  }

  demoSignIn(email, password) {
    
    if (email.length > 0) {
      this.setState({ email: this.state.email + email.shift() }, 
        () => window.setTimeout(() => this.demoSignIn(email, password), 90)
      );
    } else if (password.length > 0) {
      this.setState({ password: this.state.password + password.shift() },
        () => window.setTimeout(() => this.demoSignIn(email, password), 90)
      );
    } else {
      this.props.login(this.state)
    }
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  renderErrors() {
      return (
        <ul>
          {this.props.loginErrors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
  }

  render() {
    if (this.props.loginErrors.length !== 0 && document.getElementsByClassName("error-img-1")[0]) {
      document.getElementsByClassName("error-img-1")[0].style.display = "block";
    } else if (this.props.loginErrors.length === 0 && document.getElementsByClassName("error-img-1")[0]) {
      document.getElementsByClassName("error-img-1")[0].style.display = "none";
    }
  
    return (
      <div className="login-form">
        <div className="login-form-1">
          <div className="login-form-2">
            <img className="login-form-img" src="https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg" alt=""/>

            <div className="login-form-3">
              <div className="login-form-4">
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <header className="login-header">
                      <span className="login-header-text"> Welcome to Jasonhood</span>
                    </header>

                    <div className="login-form-5">
                      <div className="login-form-6">

                        <div className="login-form-7">
                          <label className="login-form-8">
                            <div className="login-form-9">
                              <span>Email or username</span>
                            </div>
                            <div className="login-form-email-input">
                              <input className="login-form-email-input-1"type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                            </div>
                          </label> 
                        </div>

                        <div className="login-form-10">
                          <label className="login-form-11">
                            <div className="login-form-12">
                              <span>Password</span>
                            </div>

                            <div className="login-form-password-input">
                              <input className="login-form-password-input-1" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                            </div>

                          </label>
                        </div>
                      </div>

                      <div className="login-errors">
                        <div className="login-errors-1">
                          <div className="login-errors-2">
                            <div className="login-errors-3">
                              <div className="login-errors-4">
                                <h4 className="login-errors-5">
                                  <div className="login-errors-img">
                                    <img className="error-img-1" src="https://i.imgur.com/gBTg0TL.jpg" alt=""/>
                                  </div>

                                  <div className="login-errors-text">
                                    <span>
                                      {this.renderErrors()}
                                    </span>
                                  </div>

                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <footer className="login-submit">
                      <div className="login-submit-button">
                        <button className="login-submit-button-1" type="submit">
                          <span className="login-submit-button-2"> Sign In</span>
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <button className="login-submit-button-1" onClick={this.handleDemo}>
                          <span className="login-submit-button-2">Demo</span>
                        </button>

                      </div>
                    </footer>

                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;