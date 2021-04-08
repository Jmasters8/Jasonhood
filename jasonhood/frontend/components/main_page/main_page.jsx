import React from 'react';


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.user = null

    for (let key in this.props.user) {
      this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    }
  }


  render() {
    return (
      <div>
        <h1>hello look me stonks, my name {this.user}</h1>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default MainPage;