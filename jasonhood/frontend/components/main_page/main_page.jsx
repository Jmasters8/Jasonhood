import React from 'react';


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.user = null
    for (let key in this.props.user) {
      this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    }

    this.state = {
      stockSymbol: ""
    }

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleInput(type) {
  //   return (e) =>
  //     this.setState({[type]: e.target.value})
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.fetchStock(this.state.stockSymbol.toUpperCase())
  // }


  render() {
    return (
      <div>
        <h1>hello look me stonks, my name {this.user}</h1>
        {/* <form onSubmit={this.handleSubmit}>
          <h3>what stonk u want to see?</h3>
          <input type="text" value={this.stockSymbol} onChange={this.handleInput('stockSymbol')}/>

          <button type="submit">Search</button>
        </form> */}

        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}

export default MainPage;