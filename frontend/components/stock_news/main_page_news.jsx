import React from 'react';
import MainPageNewsItem from './main_page_news_item';

class MainPageNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    }

    this.toggleNews = this.toggleNews.bind(this);
  }

  componentDidMount() {
    if (Object.keys(this.props.marketNews).length === 0) {
      this.props.fetchMarketNews()
    }

    // this.props.fetchMarketNews()
  }

  toggleNews() {
    const currentState = this.state.collapsed;
    this.setState({collapsed: !currentState})
  }

  isCollapsed() {
    if (this.state.collapsed) {
      let marketNews = this.props.marketNews.slice(0, this.props.marketNews.length / 10) 
      return (
        <div>
        <header className="dashboard-news">
          <div className="dashboard-news-header">
            <div className="dashboard-news-header-1">
              <h2 className="dashboard-news-header-2">
                <span className="dashboard-news-header-3">
                  News
                </span>
                <button onClick={this.toggleNews} className="news-button">
                  <span className="home-news-button-text">Show More</span>
                </button>
              </h2>
            </div>
          </div>
        </header>
        <div className="dashboard-articles">
          {marketNews.map((article, i) => {
            return <MainPageNewsItem key={i} article={article}/>
          })}
        </div>
        
      </div>
      )
    } else {
      let marketNews = this.props.marketNews.slice(0, this.props.marketNews.length / 5)
      return (
        <div>
        <header className="dashboard-news">
          <div className="dashboard-news-header">
            <div className="dashboard-news-header-1">
              <h2 className="dashboard-news-header-2">
                <span className="dashboard-news-header-3">
                  News
                </span>
                <button onClick={this.toggleNews} className="news-button">
                  <span className="news-button-text">Show Less</span>
                </button>
              </h2>
            </div>
          </div>
        </header>
        <div className="dashboard-articles">
          {marketNews.map((article, i) => {
            return <MainPageNewsItem key={i} article={article}/>
          })}
        </div>
        
      </div>
      )
    }
  }

  render() {
    if (Object.keys(this.props.marketNews).length === 0) return null;
    return this.isCollapsed()
  }
}

export default MainPageNews;