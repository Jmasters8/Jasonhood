import React from 'react';

class Stock extends React.Component {
  constructor(props) {
    super(props);

  }


  componentDidMount() {
    this.props.fetchStockInfo(this.props.match.params.symbol)
  }

  render() {
    
    const showStock = () => {
      return (
        <div>
          {this.props.stock.name}
        </div>
      )
    }

    const noShowStock = () => {
      return null
    }

    return this.props.stock ? showStock() : noShowStock()
  }
}

export default Stock;