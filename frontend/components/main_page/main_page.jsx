import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import GraphContainer from '../graph/graph_container';
import HomeGraph from '../home_graph/home_graph';
import OwnedAssets from '../owned_assets/owned_assets';
import MainPageNews from '../stock_news/main_page_news';
import WatchListEdit from '../watch_lists/watch_list_edit';


class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stockSymbol: "",
      buyingPower: "",
      start: new Date().setHours(6, 0, 0, 0) / 1000,
      now: new Date().setHours(13, 0, 0, 0) / 1000,
      emojis: "smilies"
    }
    this.handleClick = this.handleClick.bind(this);
    this.submitEditForm = this.submitEditForm.bind(this);
    this.setSmilies = this.setSmilies.bind(this);
    this.setAnimals = this.setAnimals.bind(this);
    this.setItems = this.setItems.bind(this);
    this.setEmoji = this.setEmoji.bind(this)
  }

  
  handleClick(e) {
    e.preventDefault();
    this.props.updateBuyingPower(parseInt(this.state.buyingPower) + this.props.user.buying_power, this.props.user.id)
    this.setState({buyingPower: ""})
  }

  handleInput(type) {
    return (e) =>
      this.setState({[type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchStock(this.state.stockSymbol.toUpperCase())
  }

  submitEditForm(e) {
    e.preventDefault()
    let assets = Object.values(this.props.watchedAssets)
    let listCategory = document.getElementById("placeholder").innerHTML
    let inputValue = document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0].value
    let emoji = document.getElementsByClassName("watch-list-edit-modal-input-emoji-2")[0].innerHTML
    document.getElementsByClassName("watch-list-edit-modal")[0].style.visibility = "hidden"
    for (let i = 0; i < assets.length; i++) {
      let asset = assets[i];
      if (asset.category === listCategory) {
        this.props.updateWatchedAsset(emoji, inputValue, asset.id)
      }
    }

  }

  closeModal() {
    document.getElementsByClassName('watch-list-edit-modal')[0].style.visibility = "hidden"
  }

  openEmojis(e) {
    e.preventDefault()
    document.getElementsByClassName('watch-list-edit-emoji')[0].style.display = "block"
  }

  showInfo() {
    
    if (document.getElementById("dash-toggle")) {
      document.getElementById("dash-toggle").id = "dash-toggle-test"
      document.getElementById("dashboard-buying-power-2").id = "dashboard-buying-power-2-active"
    } else {
      document.getElementById("dash-toggle-test").id = "dash-toggle"
      document.getElementById("dashboard-buying-power-2-active").id = "dashboard-buying-power-2"
    }
  }

  setSmilies() {
    this.setState({emojis: "smilies"})
    document.getElementById('smilies-2').style.color = "#00c805"
    document.getElementById('animals-2').style.color = "white"
    document.getElementById('items-2').style.color = "white"

    document.getElementById('smilies-2').style.borderBottom = "1px solid #00c805"
    document.getElementById('animals-2').style.borderBottom = "none"
    document.getElementById('items-2').style.borderBottom = "none"
  }

  setAnimals() {
    this.setState({emojis: "animals"})
    document.getElementById('animals-2').style.color = "#00c805"
    document.getElementById('smilies-2').style.color = "white"
    document.getElementById('items-2').style.color = "white"

    document.getElementById('animals-2').style.borderBottom = "1px solid #00c805"
    document.getElementById('smilies-2').style.borderBottom = "none"
    document.getElementById('items-2').style.borderBottom = "none"
  }

  setItems() {
    this.setState({emojis: "items"})
    document.getElementById('items-2').style.color = "#00c805"
    document.getElementById('smilies-2').style.color = "white"
    document.getElementById('animals-2').style.color = "white"

    document.getElementById('items-2').style.borderBottom = "1px solid #00c805"
    document.getElementById('smilies-2').style.borderBottom = "none"
    document.getElementById('animals-2').style.borderBottom = "none"
  }

  setEmoji(emoji) {
    // this.setState({chosenEmoji: emoji})
    document.getElementsByClassName("watch-list-edit-modal-input-emoji-2")[0].innerHTML = emoji
    document.getElementsByClassName("watch-list-edit-emoji")[0].style.display = "none";
  }


  render() {
    let assets = Object.values(this.props.assets)

    // const totalAssets = () => {
    //   let total = 0;

    //   for (let i = 1; i <= Object.keys(this.props.assets).length; i++) {
    //     let asset = this.props.assets[i];

    //     if (!asset) continue;
    //     let totalAssetPrice = asset.amount * asset.price
    //     total += totalAssetPrice
    //   }
    //   return total.toFixed(2)
    // }

    const totalAssets = () => {
      let total = 0;

      for (let i = 0; i < assets.length; i++) {
        let asset = assets[i];

        let totalAssetPrice = asset.amount * asset.price
        total += totalAssetPrice
      }
      return total.toFixed(2)
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let displayEmojis = () => {
      if (this.state.emojis === "smilies") {
        return (
          smiliesArr.map((emoji, i) => {
            return (
              <button key={i} id={'emoji' + i} onClick={() => this.setEmoji(emoji)} className="emoji-modal-2">
                {emoji}
              </button>
            )
          })
        )
      } else if (this.state.emojis === "animals") {
        return (
          animalsArr.map((emoji, i) => {
            return (
              <button key={i} id={'emoji' + i} onClick={() => this.setEmoji(emoji)} className="emoji-modal-2">
                {emoji}
              </button>
            )
          })
        )
      } else if (this.state.emojis === "items") {
        return (
          itemsArr.map((emoji, i) => {
            return (
              <button key={i} id={'emoji' + i} onClick={() => this.setEmoji(emoji)} className="emoji-modal-2">
                {emoji}
              </button>
            )
          })
        )
      }
    }

    let smilies = 
    "😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮" +
    "🤐😯😪😫🥱😴😌😛😜😝🤤😒😓😔😕🙃🤑😲🙁😖😞😟😤😢😭😦😧😨😩🤯" + 
    "😬😰😱🥵🥶😳🤪😵🥴😠😡🤬😷🤒🤕🤢🤮🤧😇🥳🥺🤠🤡🤥🤫🤭🧐🤓😈👿👹👺💀" +
    "👩👨🧑👧👦🧒👶👵👴" +
    "💪🦵🦶👂🦻👃🤏👈👉☝👆👇✌🤞🖖🤘🤙🖐✋👌👍👎✊👊🤛🤜🤚👋🤟✍👏👐🙌🤲🙏🤝💅"


    let animals = 
    "🙈🙉🙊🐵🐶🐺🐱🦁🐯🦒🦊🦝🐮🐷🐗🐭🐹🐰🐻🐨🐼🐸🦓🐴🦄🐔🐲🐽" +
    "🐾🐒🦍🦧🦮🐕‍🦺🐩🐕🐈🐅🐆🐎🦌🦏🦛🐂🐃🐄🐖🐏🐑🐐🐪🐫🦙🦘🦥🦨🦡🐘🐁🐀🦔🐇" + 
    "🦎🐊🐢🐍🐉🦕🦖🦦🦈🐬🐳🐋🐟🐠🐡🦐🦑🐙🦞🦀🐚🦆🐓🦃🦅🦢🦜🦩🦚🦉🐦🐧🐥🐤" + 
    "🐣🦇🦋🐌🐛🦟🦗🐜🐝🐞🦂🦠"

    let items =
    "🎈🧨✨🎉🎊🎃🎄🎋🎍🎎🎏🎑🧧🎀🎁🎗🎫🎠🎡🎢🎪🎭🖼🎨🧵🧶🛒👓🕶🦺🥽🥼🧥👔👕👖" +
    "🩳🧣🧤🧦👗🥻👘👚🩲🩱👙👛👜👝🥾👠🥿👡👢🩰👑🧢⛑👒🎩🎓💋💄💍💎⚽🥎🏀🏐🏈" + 
    "🏉🎱🎳⛳🥌⛸🎣🤿🛶🎿🥅🏒🥍🏏🏑🏓🏸🥏🪁🎯🥊🥋🥇🏆🎮🕹🎰🎲🔮🧩🧸🪀🃏🔊📣🎼" +
    "🔔🎵🎤🎧📯🥁🎷🎺🎸🎻🎹🔒🔑🪓🔨🧪🩸💊🏹📸💰💸💵📄📓📚💡📞☎💣🗿⌚📈📉📌"

    let emojiStringToArray = function (str) {
      let split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
      let emojis = [];
      for (let i = 0; i < split.length; i++) {
        let emoji = split[i]
        if (emoji !== "" && !emojis.includes(emoji) && emoji.length > 1) {
          emojis.push(emoji);
        }
      }
      return emojis;
    };

    let smiliesArr = emojiStringToArray(smilies)
    let animalsArr = emojiStringToArray(animals)
    let itemsArr = emojiStringToArray(items)


    return (
      <div className="main">
        <div className="main-filler">
          <div className="main-filler-1">
          </div>
        </div>

        <div className="main-1">
          <div className="main-2">
            <div className="main-3">
              <div className="dashboard-4">
                <main className="dashboard-5">
                  <div className="dashboard-6">
                    <div className="left-1">
                      <section className="left-2">
                        <header className="left-3">
                          <div className="left-4">
                            <h1 className="left-4-header">
                              ${numberWithCommas(totalAssets())}
                            </h1>
                          </div>
                          <div className="left-5">
                            <span className="left-6">
                              +$1,000.88
                            </span>&nbsp;
                            <span className="left-6">
                              (+2.23%)
                            </span>&nbsp;
                            <span className="left-7">
                              Today
                            </span>
                          </div>
                        </header>
                        <div className="dashboard-graph">
                          <HomeGraph assets={this.props.assets} stocks={this.props.stocks}/>
                          <div className="main-graph-dayz">
                                  <div className="main-graph-days-1">
                                    <button className="main-graph-days-2">
                                      <span className="main-graph-days-3">
                                        1D
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        1W
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        1M
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        3M
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        1Y
                                      </span>
                                    </button>
                                    <button className="main-graph-days-4">
                                      <span className="main-graph-days-5">
                                        5Y
                                      </span>
                                    </button>
                                  </div>
                                </div>
                        </div>



                      </section>
                      <div className="dashboard-buying-power">
                        <div className="dashboard-buying-power-1">
                          <button onClick={this.showInfo} id="dashboard-buying-power-2">
                            <header className="dashboard-buying-power-3">
                              <div className="dashboard-buying-power-4">
                                <span className="dashboard-buying-power-5">
                                  Buying Power
                                </span>
                                <span className="dashboard-buying-power-6">
                                  <span className="dashboard-buying-power-5">
                                  
                                    ${numberWithCommas(this.props.user.buying_power)}
                                  </span>
                                </span>
                              </div>
                            </header>
                          </button>
  
                          <div id="dash-toggle">
                        <div className="dash-toggle-1">
                          <div className="dash-toggle-2">
                            <div className="dash-toggle-3">
                              <div className="dash-toggle-4">
                                <div className="dash-toggle-5">
                                  <table className="dash-toggle-6">
                                    <tbody>
                                      <tr className="dash-toggle-7">
                                        <td className="dash-toggle-8">
                                          <span className="dash-toggle-9">
                                            Brokerage Cash
                                          </span>
                                        </td>
                                        <td className="dash-filler"></td>
                                        <td className="dash-toggle-10">
                                          <span className="dash-toggle-9">
                                            A lot
                                          </span>
                                        </td>
                                      </tr>
                                      <tr className="dash-toggle-7-1">
                                        <td className="dash-toggle-8-1">
                                          <span className="dash-toggle-9">
                                            Buying Power
                                          </span>
                                        </td>
                                        <td className="dash-filler"></td>
                                        <td className="dash-toggle-10">
                                          <span className="dash-toggle-9">
                                            ${numberWithCommas(this.props.user.buying_power)}
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                
                                <div className="dash-toggle-input">
                                  <label className="dash-toggle-input-0-0">
                                    Amount

                                    <input className="dash-toggle-input-0" value={this.state.buyingPower} onChange={this.handleInput('buyingPower')} placeholder="$0.00" type="text"/>
                                  </label>
                                </div>
                                <div className="dash-toggle-input-1">
                                  <div className="dash-toggle-input-2">
                                    <button onClick={this.handleClick} className="dash-toggle-input-3">
                                      <div className="dash-toggle-input-4">
                                        <span className="dash-toggle-input-5">
                                          Deposit Funds
                                        </span>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                        </div>
                      </div>

                      <section className="dashboard-list">
                        <div className="dashboard-list-1">
                          <div className="dashboard-list-2">
                            <header className="dashboard-list-3">
                              <span className="dashboard-list-4">
                                Popular Lists
                              </span>
                            </header>
                            <div className="dashboard-list-items">
                              <div className="dashboard-list-items-1">
                                <div className="dashboard-list-items-2">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/crypto/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Crypto</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-1">
                                <div className="dashboard-list-items-2-2">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">100 Most Popular</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-2">
                                <div className="dashboard-list-items-2-3">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/daily_movers/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Daily Movers</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-3">
                                <div className="dashboard-list-items-2-4">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/cannabis/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Cannabis</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-4">
                                <div className="dashboard-list-items-2-5">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/bitcoin_family/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Bitcoin Family</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-5">
                                <div className="dashboard-list-items-2-6">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/index_etfs/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Index ETFs</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-6">
                                <div className="dashboard-list-items-2-6">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/altcoins/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Altcoins</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-7">
                                <div className="dashboard-list-items-2-8">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/upcoming_earnings/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Upcoming Earnings</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-8">
                                <div className="dashboard-list-items-2-9">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/tech_media_telecom/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Tech, Media, & Telecom</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-9">
                                <div className="dashboard-list-items-2-10">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/energy/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Energy</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-10">
                                <div className="dashboard-list-items-2-11">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/pharma/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Pharma</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-11">
                                <div className="dashboard-list-items-2-12">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/technology/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Technology</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-12">
                                <div className="dashboard-list-items-2-13">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/real_estate/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Real Estate</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-13">
                                <div className="dashboard-list-items-2-14">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/healthcare/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Healthcare</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-14">
                                <div className="dashboard-list-items-2-15">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/food_drink/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Food & Drink</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-15">
                                <div className="dashboard-list-items-2-16">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/banking/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Banking</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-16">
                                <div className="dashboard-list-items-2-17">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/energy_water/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Energy & Water</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-17">
                                <div className="dashboard-list-items-2-18">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/china/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">China</span>
                                </div>
                              </div>

                              <div className="dashboard-list-items-1-18">
                                <div className="dashboard-list-items-2-19">
                                  <div className="dashboard-list-items-3">
                                    <img className="dashboard-list-items-img" src="https://cdn.robinhood.com/app_assets/list_illustrations/software/portrait_48/1x.png" alt=""/>
                                  </div>
                                  <span className="dashboard-list-items-4">Software</span>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <MainPageNews marketNews={this.props.marketNews} fetchMarketNews={this.props.fetchMarketNews}/>
                      </section>

                    </div>

                    <OwnedAssets
                      stocks={this.props.stocks}
                      fetchStock={this.props.fetchStock}
                      fetchStockData={this.props.fetchStockData}
                      assets={this.props.assets}
                      watchedAssets={this.props.watchedAssets}
                      addWatchedAsset={this.props.addWatchedAsset}
                      deleteWatchedAsset={this.props.deleteWatchedAsset}
                      currentUserId={this.props.currentUserId}

                    />
                  </div>
                </main>
              </div>
            </div>



            <NavbarContainer />




          </div>
        </div>

        <div className="watch-list-edit-modal">
          <section className="watch-list-edit-modal-1">
            <div className="watch-list-edit-modal-2">
              <header className="watch-list-edit-modal-3">
                <h1 className="watch-list-edit-modal-4">
                  <span className="watch-list-edit-modal-5">
                    Edit List
                  </span>
                </h1>
                <button onClick={this.closeModal} className="watch-list-edit-modal-x">
                  <div className="watch-list-edit-modal-x-1">
                    <img src="https://i.imgur.com/rmBxqXX.png" className="watch-list-edit-modal-x-2" />
                  </div>
                </button>
              </header>
              <form className="watch-list-edit-modal-input">
                <div className="watch-list-edit-modal-input-1">
                  <button onClick={this.openEmojis} className="watch-list-edit-modal-input-emoji">
                    <div className="watch-list-edit-modal-input-emoji-1">
                      <div className="watch-list-edit-modal-input-emoji-2">
                        💡
                      </div>
                    </div>
                  </button>
                  <div className="watch-list-edit-modal-input-text">
                    <div className="watch-list-edit-modal-input-text-1">
                      <input className="watch-list-edit-modal-input-text-2" type="text"/>
                    </div>
                  </div>

                </div>
                
                <div className="watch-list-edit-emoji">
                  <div className="watch-list-edit-emoji-1">
                    <span onClick={this.setSmilies} id="smilies-2" className="emoji-modal-categories-1">
                      Smilies
                    </span>
                    <span onClick={this.setAnimals} id="animals-2" className="emoji-modal-categories-2">
                      Animals
                    </span>
                    <span onClick={this.setItems} id="items-2" className="emoji-modal-categories-3">
                      Items
                    </span>
                  </div>
                  <div className="watch-list-edit-emoji-2">
                    {displayEmojis()}
                  </div>
                </div>


                <footer className="watch-list-edit-modal-submit">
                  <div className="watch-list-edit-modal-submit-1">
                    <button onClick={this.submitEditForm} className="watch-list-edit-modal-submit-2">
                      <div className="watch-list-edit-modal-submit-3">
                        <span className="watch-list-edit-modal-submit-4">
                          Save
                        </span>
                      </div>
                    </button>
                  </div>
                </footer>
              </form>
            </div>
          </section>
        </div>
        
      </div>
    )
  }
}

export default MainPage;
