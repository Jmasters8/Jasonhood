import React from 'react';
import WatchListForm from './watch_list_form';

class WatchLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: "smilies",
      chosenEmoji: "💡"
    }

    this.showForm = this.showForm.bind(this);
    this.setSmilies = this.setSmilies.bind(this);
    this.setAnimals = this.setAnimals.bind(this);
    this.setItems = this.setItems.bind(this);
    this.setEmoji = this.setEmoji.bind(this)
  }

  showForm() {
    document.getElementById("watch-list-form").style.display = "block";
  }

  setSmilies() {
    this.setState({emojis: "smilies"})
    document.getElementById('smilies').style.color = "#00c805"
    document.getElementById('animals').style.color = "white"
    document.getElementById('items').style.color = "white"

    document.getElementById('smilies').style.borderBottom = "1px solid #00c805"
    document.getElementById('animals').style.borderBottom = "none"
    document.getElementById('items').style.borderBottom = "none"
  }

  setAnimals() {
    this.setState({emojis: "animals"})
    document.getElementById('animals').style.color = "#00c805"
    document.getElementById('smilies').style.color = "white"
    document.getElementById('items').style.color = "white"

    document.getElementById('animals').style.borderBottom = "1px solid #00c805"
    document.getElementById('smilies').style.borderBottom = "none"
    document.getElementById('items').style.borderBottom = "none"
  }

  setItems() {
    this.setState({emojis: "items"})
    document.getElementById('items').style.color = "#00c805"
    document.getElementById('smilies').style.color = "white"
    document.getElementById('animals').style.color = "white"

    document.getElementById('items').style.borderBottom = "1px solid #00c805"
    document.getElementById('smilies').style.borderBottom = "none"
    document.getElementById('animals').style.borderBottom = "none"
  }

  setEmoji(emoji) {
    this.setState({chosenEmoji: emoji})
    document.getElementById("emoji-modal").style.display = "none";
  }

  render() {
  
    let allWatchedAssets = Object.values(this.props.watchedAssets)
    let watchedAssets = [];
    for (let i = 0; i < allWatchedAssets.length; i++) {
      let asset = allWatchedAssets[i]
      if (!watchedAssets.includes(asset) && asset.category !== null) {
        watchedAssets.push(asset)
      }
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
      <div>
        <div className="watch-list-header">
          <div className="watch-list-header-1">
            <header className="watch-list-header-2">
              <span className="watch-list-header-3">
                Lists
              </span>
              <button onClick={this.showForm} className="watch-list-button">
                +
              </button>

            </header>
          </div>
        </div>

        <WatchListForm chosenEmoji={this.state.chosenEmoji} currentUserId={this.props.currentUserId} addWatchedAsset={this.props.addWatchedAsset} />

        <div id="emoji-modal"className="emoji-modal">
          <div className="emoji-modal-categories">
            <span onClick={this.setSmilies} id="smilies" className="emoji-modal-categories-1">
              Smilies
            </span>
            <span onClick={this.setAnimals} id="animals" className="emoji-modal-categories-2">
              Animals
            </span>
            <span onClick={this.setItems} id="items" className="emoji-modal-categories-3">
              Items
            </span>
          </div>
          <div className="emoji-modal-1">
            {/* {emojisArr.map((emoji, i) => {
              return (
                <span key={i} className="emoji-modal-2">
                  {emoji}
                </span>
              )
            })} */}
            {displayEmojis()}
          </div>
        </div>

      </div>
    )
  }
}

export default WatchLists;