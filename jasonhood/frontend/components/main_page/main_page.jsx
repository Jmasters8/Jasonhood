import React from 'react';
import NavbarContainer from '../navbar/navbar_container'


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.user = null
    for (let key in this.props.user) {
      this.user = this.props.user[key].first_name + " " + this.props.user[key].last_name
    }

    // this.state = {
    //   stockSymbol: ""
    // }

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) =>
      this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchStock(this.state.stockSymbol.toUpperCase())
  }

  render() {
    return (
      <div className="main">
        <div className="main-filler">
          <div className="main-filler-1">
          </div>
        </div>

        <div className="main-1">
          <div className="main-2">
            <div className="main-3">
              <div className="main-4">

              </div>
            </div>



            <NavbarContainer />




          </div>
        </div>

      </div>
    )
  }
}

export default MainPage;