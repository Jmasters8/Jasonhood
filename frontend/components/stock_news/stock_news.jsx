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

    // this.props.fetchStockNews(this.props.symbol, yesterday.toISOString().split('T')[0], new Date().toISOString().split('T')[0])
  }

  toggleDescription() {
    const currentState = this.state.collapsed;
    this.setState({ collapsed: !currentState });
    // console.log(this.state)
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
      let article = newsArticles[0]
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
            <img src={`${article.image}`} className="article-image" alt=""/>
          </div>
          </a>
        </div>
      )
    }

    let secondArticle = () => {
      let article = newsArticles[1]
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
            <img src={`${article.image}`} className="article-image" alt=""/>
          </div>
          </a>
        </div>
      )
    }

    let thirdArticle = () => {
      let article = newsArticles[2]
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
            <img src={`${article.image}`} className="article-image" alt=""/>
          </div>
          </a>
        </div>
      )
    }

    let fourthArticle = () => {
      let article = newsArticles[3]
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
            <img src={`${article.image}`} className="article-image" alt=""/>
          </div>
          </a>
        </div>
      )
    }

    let fifthArticle = () => {
      let article = newsArticles[4]
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
            <img src={`${article.image}`} className="article-image" alt=""/>
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
              <span className="news-button-text">Show More</span>
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
            <span className="news-button-text">Show Less</span>
          </button>
        </header>
        <div className="news-articles">
          {firstArticle()}
          {secondArticle()}
          {thirdArticle()}
          {fourthArticle()}
          {fifthArticle()}
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
  
    // return (
    //   <div className="news">
    //     <header className="news-title">
    //       <span className="news-title-1">
    //         News
    //       </span>
    //       <button className="news-button">
    //         <span className="news-button-text">Show More</span>
    //       </button>
    //     </header>
    //     <div className="news-articles">
    //       {firstArticle()}
    //       {secondArticle()}
    //       {thirdArticle()}
    //     </div>
    //   </div>
    // )
  }
}
// {newsArticle[0].headline}
export default StockNews;