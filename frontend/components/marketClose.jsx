import React from 'react';
import { ClapSpinner } from "react-spinners-kit";

class MarketClose extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="loading-background">
        <h1 className="marketClose">The Stock Market is Currently Closed :(</h1>
        <ClapSpinner class="loading-spinner" size={48} color="##00c805" loading={loading} />
      </div>
    )
  }
}

export default MarketClose;