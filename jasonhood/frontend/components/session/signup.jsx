import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      first_name: "",
      laste_name: "",
      password: ""
    };
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>

      </div>
    );
  }
};

export default Signup;