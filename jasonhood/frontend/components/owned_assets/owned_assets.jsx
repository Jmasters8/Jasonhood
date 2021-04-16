import React from 'react';
import { Link } from 'react-router-dom';

class OwnedAssets extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
 
  // const myAssets = () => {
  //   let stocks = []
  //     let assets = Object.values(this.props.props.assets)
  //     for (let i = 0; i < assets.length; i++) {
  //       let asset = assets[i];
  //       // console.log(asset)
  //       if (!stocks.includes(asset.ticker) && asset.ticker !== null ) {
  //         stocks.push(asset.ticker)
  //       }
  //     }
  //   console.log(stocks)
    

    // const myAssets = () => {
    //   let num = 0;

    //   let assets = Object.values(this.props.props.assets)

    //   for (let i = 0; i < assets.length; i++) {
    //     let asset = assets[i];
    //     if (asset.ticker === "NIO") {
    //       num += asset.amount
    //     }
    //   }
    //   return num
    // }

    // const totalSharesPrice = () => {
    //   let sum = 0;
    //   let assets = Object.values(this.props.props.assets)

    //   for (let i = 0; i < assets.length; i++) {
    //     let asset = assets[i];
    //     if (asset.ticker === this.props.stock.Symbol) {
    //       sum += asset.amount
    //     }
    //   }
    //   return sum;
    // }




  // console.log(myAssets())

    return (
      <div className="right-1">
        {/* <div className="right-2">
          <div className="right-3">
            <div className="right-4">
              <div className="right-5">
                <header className="right-6">
                  <span className="right-7">
                    Stocks
                  </span>
                </header>
              </div>
              <div className="right-8">
                <div className="right-9">
                  <div className="right-10">
                    <div className='right-12'>
                      <span className="right-13">
                        <span classsName="right-14">
                          NIO
                        </span>
                      </span>
                    </div>
                    <div className="right-15">
                      <span className="right-16">
                        
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default OwnedAssets