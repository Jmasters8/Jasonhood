import React from 'react';
import {ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, ReferenceLine} from "recharts";
import Odometer from 'react-odometerjs';
import Loading from '../loading';

class HomeGraph extends React.Component {
  constructor(props) {
    super(props);

    if (document.getElementsByClassName("left-4-header")[0]) {
      this.state = {
        hoverTime: "",
        currentPrice: document.getElementsByClassName("left-4-header")[0].innerHTML
      }
    } else {
      this.state = {
        hoverTime: "",
        currentPrice: ""
      }
    }
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.resetHoverPrice = this.resetHoverPrice.bind(this);
    this.handleHoverTime = this.handleHoverTime.bind(this);
  }

  handleHoverTime() {
    return (
      <div>
        { new Date(this.state.hoverTime * 1000).toLocaleTimeString(["en-US"], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    )
  }

  resetHoverPrice() {
    this.setState({currentPrice: HomeGraph.data[HomeGraph.data.length - 1].price});
  }

  handleMouseHover(e) {
    if (e.activePayload) {
      let priceHovered = e.activePayload[0].payload.price;
      let timeHovered = e.activePayload[0].payload.time;
      this.setState({hoverTime: timeHovered});
      this.setState({currentPrice: priceHovered})
    }
  }

  render() {
    let shouldLoad = true
    let assets = Object.values(this.props.assets)
    let uniqueAssets = [];
    for (let i = 0; i < assets.length; i++) {
      let asset = assets[i].ticker
      if (!uniqueAssets.includes(asset)) {
        uniqueAssets.push(asset)
      }
    }
    
    if (Object.values(this.props.stocks).length < uniqueAssets.length) {
      HomeGraph.ready = false
      return <Loading />
    }
    for (let i = 0; i < Object.values(this.props.stocks).length; i++) {
      if (Object.values(this.props.stocks)[i].data === undefined) {
        HomeGraph.ready = false
        return <Loading />
      }
      
      for (let t = 0; t < uniqueAssets.length; t++) {
        if (uniqueAssets[t] === Object.keys(this.props.stocks)[i]) {
          shouldLoad = false
        }
      }
    }
    if (shouldLoad && uniqueAssets.length !== 0) return <Loading />
    HomeGraph.ready = true
    let lowestDataAmount = 0

    for (let n = 0; n < Object.values(this.props.stocks).length; n++) {
      let stock = Object.values(this.props.stocks)[n];
      if (lowestDataAmount === 0 || stock.data.c.length <= lowestDataAmount) {
        lowestDataAmount = stock.data.c.length
      }
    }
    
    function getTime(unixTime) {
      let date = new Date(unixTime * 1000);
      let hours = date.getHours();
      hours = ((hours + 11) % 12 + 1);
      let minutes = "0" + date.getMinutes();
      let formattedTime = hours + ':' + minutes.substr(-2)
      return formattedTime
    }

    let stocks = this.props.stocks
    let data2 = []

    let getData = () => {
      let assets = Object.values(this.props.assets);
  
      if (assets.length === 0) {
        data2.push({price: null, date: null})
        return null
      }
      
      for (let i = 0; i < lowestDataAmount; i++) {
        let time;
        if (i < 72 && stocks[assets[0].ticker]) {
          time = getTime(stocks[assets[0].ticker].data.t[i]) + "AM"
        } else if (i >= 72 && stocks[assets[0].ticker]) {
          time = getTime(stocks[assets[0].ticker].data.t[i]) + "PM"
        }
        
        let dataPoint = {
          price: 0,
          date: time
        }
        
        for (let j = 0; j < uniqueAssets.length; j++) {
          let ticker = uniqueAssets[j];
          if (!stocks[ticker]) return <Loading />
          let price = stocks[ticker].data.c[i]
          if (stocks[ticker] && i >= stocks[ticker].data.c.length) continue

          for (let k = 0; k < assets.length; k++) {
            let asset = assets[k];
            

            if (asset.ticker === ticker) {
              dataPoint.price += (asset.amount * price)
            }
          }
        }
        dataPoint.price = parseInt(dataPoint.price.toFixed(2))
        data2.push(dataPoint)
      }
      
    }

    if (data2.length === 0) {
      getData()
    }
    HomeGraph.data = data2

    let stockValue = () => {
      if (this.state.currentPrice === "" && data2.length > 0) {
        return data2[data2.length - 1].price
      } else {
        return this.state.currentPrice
      }
    }

    let price;
    let percent;
    let color;
    let opening;
    if (data2.length !== 0) {
      opening = data2[0].price
    } else {
      opening = 0;
    }

    function change() {
      if (data2.length === 0) return null
      let beginningPrice = data2[0].price
      let lastPrice = data2[data2.length - 1].price

      price = lastPrice - beginningPrice
      if ((lastPrice === 0 && beginningPrice === 0) || (lastPrice === null && beginningPrice === null)) {
        percent = 0
      } else {
        percent = (lastPrice - beginningPrice) / beginningPrice * 100
      }
    }
    change()
    
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //CSS CHANGES BASED ON UP OR DOWN DAY
    if (document.getElementById("percent-change") && document.getElementById("price-change")) {
      percent >= 0 ? document.getElementById("percent-change").innerHTML = `(+${percent.toFixed(2)}%)` : document.getElementById("percent-change").innerHTML = `(${percent.toFixed(2)}%)`
      price >= 0 ? document.getElementById("price-change").innerHTML = `+$${numberWithCommas(price.toFixed(2))}` : document.getElementById("price-change").innerHTML = `-$${numberWithCommas((price * - 1).toFixed(2))}`
    }

    if (document.getElementsByClassName("watch-list-button-green")[0] || document.getElementsByClassName("watch-list-button-red")[0]) {
      if (document.getElementsByClassName("watch-list-button-green")[0] && price <= 0) {
        document.getElementsByClassName("watch-list-button-green")[0].className = "watch-list-button-red"
      } else if (document.getElementsByClassName("watch-list-button-red")[0] && price >= 0) {
        document.getElementsByClassName("watch-list-button-red")[0].className = "watch-list-button-green"
      }
    }
    price >= 0 ? color = "rgb(0,200,5)" : color = "rgb(255,80,0)"

    if (document.getElementsByClassName("nav-logo")[0]) {
      price >= 0 ? document.getElementsByClassName("nav-logo")[0].className = "nav-logo-green" : document.getElementsByClassName("nav-logo")[0].className = "nav-logo-red"
    }

    let eles = document.getElementsByClassName("navbar-list-word")
    if (document.getElementsByClassName("navbar-list-word")[0] && price >= 0) {
      for (let e = 0; e < eles.length; e++) {
        eles[e].className="navbar-list-word-green"
      } 
    } else {
      for (let e = 0; e < eles.length; e++) {
        eles[e].className="navbar-list-word-red"
      } 
    }
  
    if (document.getElementsByClassName("main-graph-days-2")[0] && price >= 0) {
      document.getElementsByClassName("main-graph-days-2")[0].style.color = "rgb(0, 200, 5)"
    } else if (document.getElementsByClassName("main-graph-days-2")[0] && price < 0) {
      document.getElementsByClassName("main-graph-days-2")[0].style.color = "rgb(255, 80, 0)"
    }
    
    if (document.getElementsByClassName("home-news-button-text")[0] && price < 0) {
      document.getElementsByClassName("home-news-button-text")[0].className = "home-news-button-text-red"
    } else if (document.getElementsByClassName("home-news-button-text-red")[0] && price >= 0) {
      document.getElementsByClassName("home-news-button-text-red")[0].className = "home-news-button-text"
    }

    if (document.getElementsByClassName("dash-toggle-input-3")[0] && price < 0) {
      document.getElementsByClassName("dash-toggle-input-3")[0].className = "dash-toggle-input-3-red"
      document.getElementsByClassName("dash-toggle-input-0")[0].className = "dash-toggle-input-0-red"
    } else if (document.getElementsByClassName("dash-toggle-input-3-red")[0] & price >= 0) {
      document.getElementsByClassName("dash-toggle-input-3-red")[0].className = "dash-toggle-input-3"
      document.getElementsByClassName("dash-toggle-input-0-red")[0].className = "dash-toggle-input-0"
    }

    if (price >= 0 && document.getElementById("search-words")) {
      document.getElementById("search-words").innerHTML = "search-dropdown-name-green"

    } else if (price < 0 && document.getElementById("search-words")) {
      document.getElementById("search-words").innerHTML = "search-dropdown-name-red"
    }

    //dropdown for watchlist
    let elements = document.getElementsByClassName("watch-list-category-3")
    let arrows = document.getElementsByClassName("watch-list-dropdown-3")
    if (price >= 0 && elements) {
      for (let e = 0; e < elements.length; e++) {
        elements[e].addEventListener("mouseenter", event => {
          if (event.target === elements[e]) {
            arrows[e].style.content = 'url("https://i.imgur.com/2vngOYR.png")'
          }
        })

        elements[e].addEventListener("mouseleave", event => {
          if (event.target === elements[e]) {
            arrows[e].style.content = 'url("https://i.imgur.com/9xOZVK8.png")'
          }
        })
      }
    } else if (price < 0 && elements) {
      for (let e = 0; e < elements.length; e++) {
        elements[e].addEventListener("mouseenter", event => {
          if (event.target === elements[e]) {
            arrows[e].style.content = 'url("https://i.imgur.com/niRCr40.png")'
          }
        })
        elements[e].addEventListener("mouseleave", event => {
          if (event.target === elements[e]) {
            arrows[e].style.content = 'url("https://i.imgur.com/9xOZVK8.png")'
          }
        })
      }
    }

    //edit list modal open
    let ellipsis = document.getElementsByClassName("watch-list-edit-button-1")

    if (price >= 0 && ellipsis) {
      for (let d = 0; d < ellipsis.length; d++) {
        ellipsis[d].addEventListener("mouseenter", event => {
          if (event.target === ellipsis[d]) {
            ellipsis[d].style.content = 'url("https://i.imgur.com/STPRdc6.png")'
          }
        })
        ellipsis[d].addEventListener("mouseleave", event => {
          if (event.target === ellipsis[d]) {
            ellipsis[d].style.content = 'url("https://i.imgur.com/u5oCv3G.png")'
          }
        })
      }
    } else if (price < 0 && ellipsis) {
      for (let d = 0; d < ellipsis.length; d++) {
        ellipsis[d].addEventListener("mouseenter", event => {
          if (event.target === ellipsis[d]) {
            ellipsis[d].style.content = 'url("https://i.imgur.com/w7GUWDB.png")'
          }
        })
        ellipsis[d].addEventListener("mouseleave", event => {
          if (event.target === ellipsis[d]) {
            ellipsis[d].style.content = 'url("https://i.imgur.com/u5oCv3G.png")'
          }
        })
      }
    }

    //edit list
    let cog = document.getElementsByClassName("watch-list-dropdown-edit-modal");
    let cogs = document.getElementsByClassName("watch-list-dropdown-edit-modal-cog");
    let cogText = document.getElementsByClassName("watch-list-dropdown-edit-modal-4");
    if (price >= 0 && cog) {
      for (let c = 0; c < cog.length; c++) {
        cog[c].addEventListener("mouseenter", event => {
          if (event.target === cog[c]) {
            cogs[c].style.content = 'url("https://i.imgur.com/64HsmhZ.png")'
            cogText[c].style.color = 'rgb(0, 200, 5)'
          }
        })
        cog[c].addEventListener("mouseleave", event => {
          if (event.target === cog[c]) {
            cogs[c].style.content = 'url("https://i.imgur.com/hLjxnPO.png")'
            cogText[c].style.color = 'rgb(255, 255, 255)'
          }
        })
      }
    } else if (price < 0 && cog) {
      for (let c = 0; c < cog.length; c++) {
        cog[c].addEventListener("mouseenter", event => {
          if (event.target === cog[c]) {
            cogs[c].style.content = 'url("https://i.imgur.com/sFlcNU3.png")'    
            cogText[c].style.color = 'rgb(255, 80, 0)'
          }
        })
        cog[c].addEventListener("mouseleave", event => {
          if (event.target === cog[c]) {
            cogs[c].style.content = 'url("https://i.imgur.com/hLjxnPO.png")'
            cogText[c].style.color = 'rgb(255, 255, 255)'
          }
        })
      }
    }

    //delete list
    let deleteList = document.getElementsByClassName("watch-list-dropdown-delete");
    let xImgs = document.getElementsByClassName("watch-list-dropdown-delete-x");
    let deleteText = document.getElementsByClassName("watch-list-dropdown-delete-4");

    if (price >= 0 && deleteList) {
      for (let x = 0; x < deleteList.length; x++) {
        deleteList[x].addEventListener("mouseenter", event => {
          if (event.target === deleteList[x]) {
            xImgs[x].style.content = 'url("https://i.imgur.com/mU8ff1B.jpg")'
            deleteText[x].style.color = "rgb(0, 200, 5)"
          }
        })

        deleteList[x].addEventListener("mouseleave", event => {
          if (event.target === deleteList[x]) {
            xImgs[x].style.content = 'url("https://i.imgur.com/r1sRcfF.jpg")'
            deleteText[x].style.color = "rgb(255, 255, 255)"
          }
        })
      }
    } else if (price < 0 && deleteList) {
      for (let x = 0; x < deleteList.length; x++) {
        deleteList[x].addEventListener("mouseenter", event => {
          if (event.target === deleteList[x]) {
            xImgs[x].style.content = 'url("https://i.imgur.com/Dx3u3wo.jpg")'
            deleteText[x].style.color = "rgb(255, 80, 0)"
          }
        })

        deleteList[x].addEventListener("mouseleave", event => {
          if (event.target === deleteList[x]) {
            xImgs[x].style.content = 'url("https://i.imgur.com/r1sRcfF.jpg")'
            deleteText[x].style.color = "rgb(255, 255, 255)"
          }
        })
      }
    }
    //edit list input focus
    if (price >= 0 && document.getElementsByClassName("watch-list-edit-modal-input-text-2-red")[0]) {
      document.getElementsByClassName("watch-list-edit-modal-input-text-2-red")[0].className = "watch-list-edit-modal-input-text-2"
    } else if (price < 0 && document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0]) {
      document.getElementsByClassName("watch-list-edit-modal-input-text-2")[0].className = "watch-list-edit-modal-input-text-2-red"
    }

    //save list edit button
    if (price >= 0 && document.getElementsByClassName("watch-list-edit-modal-submit-2-red")[0]) {
      document.getElementsByClassName("watch-list-edit-modal-submit-2-red")[0].className = "watch-list-edit-modal-submit-2"
    } else if (price < 0 && document.getElementsByClassName("watch-list-edit-modal-submit-2")[0]) {
      document.getElementsByClassName("watch-list-edit-modal-submit-2")[0].className = "watch-list-edit-modal-submit-2-red"
    }

    //watch list form cancel
    if (price >= 0 && document.getElementsByClassName("watch-list-form-cancel-3-red")[0]) {
      document.getElementsByClassName("watch-list-form-cancel-3-red")[0].className = "watch-list-form-cancel-3"
      document.getElementsByClassName("watch-list-form-cancel-6-red")[0].className = "watch-list-form-cancel-6"
      document.getElementsByClassName("watch-list-form-inputs-title-2-red").className = "watch-list-form-inputs-title-2"
      document.getElementsByClassName("watch-list-form-create-1-red").className = "watch-list-form-create-1"
    } else if (price < 0 && (document.getElementsByClassName("watch-list-form-cancel-3")[0] ) ) {
      document.getElementsByClassName("watch-list-form-cancel-3")[0].className = "watch-list-form-cancel-3-red"
      document.getElementsByClassName("watch-list-form-cancel-6")[0].className = "watch-list-form-cancel-6-red"
      document.getElementsByClassName("watch-list-form-inputs-title-2")[0].className = "watch-list-form-inputs-title-2-red"
      document.getElementsByClassName("watch-list-form-create-1")[0].className = "watch-list-form-create-1-red"
    }

    //watch list emojis text
    if (price >= 0 && document.getElementById("colors")) {
      document.getElementById("colors").innerHTML = "rgb(0, 200, 5)"
    } else if (price < 0 && document.getElementById("colors")) {
      document.getElementById("colors").innerHTML = "rgb(255, 80, 0)"
    }

    if (data2.length === 0) return <Loading />
    
    return(
      <div className="main-graph-1">
        <span className="home-graph-money">$</span><Odometer className="banana" duration={50000} value={stockValue()}/>
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart data={data2} onMouseMove={this.handleMouseHover} onTouchStart={this.handleMouseHover} onMouseLeave={this.resetHoverPrice}>
            <Area dataKey="price" stroke={color} strokeWidth={2} fill="#000000"/>
            <XAxis dataKey="date" hide/>
            <YAxis dataKey="price" type="number" domain={data2[0].price, data2[data2.length - 1].price} hide/>
            <Tooltip content={<CustomToolTip />} cursor={{ stroke: "white", strokeWidth: 0.5}} isAnimationActive={false} offset={-40} position={{ y: -35}} allowEscapeViewBox={{x: true, y: true}}/>
            <ReferenceLine y={opening} strokeWidth={1.5} strokeHeight={1.5} strokeDasharray="1 6" stroke="lightslategray" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

function CustomToolTip({active, payload, label}) {
  if (active) {
    return (
    <div className="tooltip">
      <h4>{label}</h4>
    </div>
    )
  }
  return null;
}

export default HomeGraph;