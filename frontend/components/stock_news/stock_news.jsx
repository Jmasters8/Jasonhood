import React from 'react';

class StockNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    }

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  componentDidMount() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 5)
  }

  toggleDescription() {
    const currentState = this.state.collapsed;
    this.setState({ collapsed: !currentState });
  }

  render() {

    if (this.props.stocks[this.props.symbol].news === undefined || this.props.stocks[this.props.symbol].news.length < 3) {
      return null
    }

    let newsArticles = this.props.stocks[this.props.symbol].news

    function convertTimestamp(timestamp) {
      var d = new Date(timestamp * 1000),
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2),
        dd = ('0' + d.getDate()).slice(-2),
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),
        ampm = 'AM',
        time;
      if (hh > 12) {
        h = hh - 12;
        ampm = 'PM';
      } else if (hh === 12) {
        h = 12;
        ampm = 'PM';
      } else if (hh == 0) {
        h = 12;
      }
      time = h + ':' + min + ':' + ampm + ', ' + mm + '/' + dd + '/' + yyyy
      return time;
    }

    let firstArticle = () => {
      if (!newsArticles[0]) return null;
      let article = newsArticles[0]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let secondArticle = () => {
      if (!newsArticles[1]) return null;
      let article = newsArticles[1]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let thirdArticle = () => {
      if (!newsArticles[2]) return null;
      let article = newsArticles[2]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let fourthArticle = () => {
      if (!newsArticles[3]) return null;
      let article = newsArticles[3]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let fifthArticle = () => {
      if (!newsArticles[4]) return null;
      let article = newsArticles[4]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              {/* <img src={`${article.image}`} className="article-image" alt=""/> */}
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let sixthArticle = () => {
      if (!newsArticles[5]) return null;
      let article = newsArticles[5]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let seventhArticle = () => {
      if (!newsArticles[6]) return null;
      let article = newsArticles[6]
      let img = article.image
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let eigthArticle = () => {
      if (!newsArticles[7]) return null;
      let article = newsArticles[7];
      let img = article.image;
      if (img === "") img = "https://i.imgur.com/7y4PIHc.jpeg"
      return (
        <div className="article-1">
          <a className="article-link" href={`${article.url}`} target="_blank">
            <div className="article-2">
              <span className="article-source">
                {article.source} &nbsp;<p className="article-date">{convertTimestamp(article.datetime)}</p>
              </span>
              <span className="article-title">
                {article.headline}
              </span>
              <span className="article-summary">
                {article.summary}
              </span>
              <img src={`${img}`} className="article-image" alt="" />
            </div>
          </a>
        </div>
      )
    }

    let isCollapsed = () => {
      if (this.state.collapsed) {
        return (
          <div className="news">
            <header className="news-title">
              <span className="news-title-1">
                News
            </span>
              <button onClick={this.toggleDescription} className="news-button">
                <span className={this.props.newsButtonClass}>Show More</span>
              </button>
            </header>
            <div className="news-articles">
              {firstArticle()}
              {secondArticle()}
              {thirdArticle()}
            </div>
          </div>
        )
      } else {
        return (
          <div className="news">
            <header className="news-title">
              <span className="news-title-1">
                News
          </span>
              <button onClick={this.toggleDescription} className="news-button">
                <span className={this.props.newsButtonClass}>Show Less</span>
              </button>
            </header>
            <div className="news-articles">
              {firstArticle()}
              {secondArticle()}
              {thirdArticle()}
              {fourthArticle()}
              {fifthArticle()}
              {sixthArticle()}
              {seventhArticle()}
              {eigthArticle()}
            </div>
          </div>
        )
      }
    }

    return (
      <div>
        {isCollapsed()}
      </div>
    )
  }
}

export default StockNews;