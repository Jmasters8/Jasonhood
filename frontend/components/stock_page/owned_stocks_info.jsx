import React from 'react';

class OwnedStocksInfo extends React.Component {
  constructor(props) {
    super(props);

  }

  shouldComponentUpdate(nextProps) {
    // console.log(Object.values(nextProps.assets).length, Object.values(this.props.assets).length)
    return (Object.values(nextProps.assets).length !== Object.values(this.props.assets).length)
  }

  componentDidUpdate() {
    // console.log(Object.values(nextProps.assets).length, Object.values(this.props.assets).length)
  }

  render() {
    const totalAssets = () => {
      let totalPrice = 0;
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        // console.log(asset)
        if (asset.ticker === this.props.ticker) {
          totalPrice += (asset.amount * asset.price)
        }
      }
      return totalPrice.toFixed(2)
    }

    const averageCost = () => {
      let sum = 0;
      let count = 0
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        if (asset.ticker === this.props.ticker) {
          sum += (asset.amount * asset.price)
          count += asset.amount
        }
      }
      return (sum / count).toFixed(2)
    }

    const sharesAmount = () => {
      let sum = 0;
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        if (asset.ticker === this.props.ticker) {
          sum += asset.amount
        }
      }
      return sum;
    }

    const portfolioDiversity = () => {
      let totalPortfolio = 0
      let assets = Object.values(this.props.assets)

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];
        totalPortfolio += asset.amount
      }
      return (totalAssets() / totalPortfolio).toFixed(2)
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
      <section className="owned-assets">
        <div className="owned-assets-1">
          <div className="owned-assets-2">
            <header className="owned-assets-3">
              <div className="owned-assets-4">
                Your Market Value
              </div>
              <h2 className="owned-assets-5">
                <span className="owned-assets-6">
                  ${numberWithCommas(totalAssets())}
                </span>
              </h2>
            </header>
            <table className="owned-assets-table">
              <tbody className="owned-assets-table-1">
                <tr className="owned-assets-table-2">
                  <td className="owned-assets-table-3">
                    Cost
                  </td>
                  <td className="owned-assets-table-filler"></td>
                  <td className="owned-assets-table-4">
                    ${numberWithCommas(totalAssets())}
                  </td>
                </tr>
                <tr className="owned-assets-table-2">
                  <td className="owned-assets-table-3">
                    Today's Return
                  </td>
                  <td className="owned-assets-table-filler"></td>
                  <td className="owned-assets-table-4">
                    ${((totalAssets() * this.props.percentChange) / 100).toFixed(2)} ({this.props.percentChange}%)
                  </td>
                </tr>
                <tr className="owned-assets-table-2">
                  <td className="owned-assets-table-3">
                    Total Return
                  </td>
                  <td className="owned-assets-table-filler"></td>
                  <td className="owned-assets-table-4">
                  ${((totalAssets() * this.props.percentChange) / 100).toFixed(2)} ({this.props.percentChange}%)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="owned-assets-2-2">
            <header className="owned-assets-3">
              <div className="owned-assets-4">
                Your Average Cost
              </div>
              <h2 className="owned-assets-5">
                <span className="owned-assets-6">
                  ${averageCost()}
                </span>
              </h2>
            </header>
            <table className="owned-assets-table">
              <tbody className="owned-assets-table-1">
                <tr className="owned-assets-table-2">
                  <td className="owned-assets-table-3">
                    Shares
                  </td>
                  <td className="owned-assets-table-filler"></td>
                  <td id="sharesAmount" className="owned-assets-table-4">
                    {numberWithCommas(sharesAmount())}
                  </td>
                </tr>
                <tr className="owned-assets-table-2">
                  <td className="owned-assets-table-3">
                    Portfolio Diversity
                  </td>
                  <td className="owned-assets-table-filler"></td>
                  <td className="owned-assets-table-4">
                    {portfolioDiversity()}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default OwnedStocksInfo;