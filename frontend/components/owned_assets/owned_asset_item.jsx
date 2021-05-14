import React from 'react';
import { Link } from 'react-router-dom';
import MiniGraph from '../graph/mini_graph';

class OwnedAssetItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let shares = 0;
    let assets = Object.values(this.props.assets)
    assets.forEach(asset => {
      if (this.props.ticker === asset.ticker && asset.ticker !== null) {
        shares += asset.amount
      }
    })
    
    return (
      <li className="owned-asset-item">
        <Link className="owned-asset-item-link" to={`/stocks/${this.props.ticker}`}>
          <div className="owned-asset-item-ticker">
            <div className="owned-asset-item-ticker-2">
              <span className="owned-asset-item-ticker-3">
                {this.props.ticker}
              </span>
            </div>
            <div className="owned-asset-item-shares">
              <span className="owned-asset-item-shares-2">
                {shares} Shares
              </span>
            </div>
          </div>
          <MiniGraph />
          <div className="owned-asset-item-price">

          </div>
        </Link>
      </li>
    )
  }
}

export default OwnedAssetItem;