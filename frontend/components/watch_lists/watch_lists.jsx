import React from 'react';
import WatchListForm from './watch_list_form';

class WatchLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: "smilies"
    }

    this.showForm = this.showForm.bind(this);
    this.setSmilies = this.setSmilies.bind(this);
    this.setAnimals = this.setAnimals.bind(this);
    this.setItems = this.setItems.bind(this);
  }

  showForm() {
    document.getElementById("watch-list-form").style.display = "block";
  }

  setSmilies() {
    this.setState({emojis: "smilies"})
  }

  setAnimals() {
    this.setState({emojis: "animals"})
  }

  setItems() {

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
              <span key={i} className="emoji-modal-2">
                {emoji}
              </span>
            )
          })
        )
      } else if (this.state.emojis === "animals") {
        return (
          animalsArr.map((emoji, i) => {
            return (
              <span key={i} className="emoji-modal-2">
                {emoji}
              </span>
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
    "🐿🦎🐊🐢🐍🐉🦕🦖🦦🦈🐬🐳🐋🐟🐠🐡🦐🦑🐙🦞🦀🐚🦆🐓🦃🦅🕊🦢🦜🦩🦚🦉🐦🐧🐥🐤" + 
    "🐣🦇🦋🐌🐛🦟🦗🐜🐝🐞🦂🦠"

    let items =
    ""
    
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

        <WatchListForm currentUserId={this.props.currentUserId} addWatchedAsset={this.props.addWatchedAsset} />

        <div id="emoji-modal"className="emoji-modal">
          <div className="emoji-modal-categories">
            <span onClick={this.setSmilies} className="emoji-modal-categories-1">
              Smilies
            </span>
            <span onClick={this.setAnimals} className="emoji-modal-categories-2">
              animals
            </span>
            <span onClick={this.setItems} className="emoji-modal-categories-3">
              items
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