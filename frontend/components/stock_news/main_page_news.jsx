import React from 'react';
import MainPageNewsItem from './main_page_news_item';

class MainPageNews extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchMarketNews()
  }

  render() {
    if (Object.keys(this.props.marketNews).length === 0) return null;

    return(
      <div>
        <header className="dashboard-news">
          <div className="dashboard-news-header">
            <div className="dashboard-news-header-1">
              <h2 className="dashboard-news-header-2">
                <span className="dashboard-news-header-3">
                  News
                </span>
              </h2>
            </div>
          </div>
        </header>
        <div className="dashboard-articles">
          {this.props.marketNews.map((article, i) => {
            return <MainPageNewsItem key={i} article={article}/>
          })}
        </div>
        
      </div>
    )
  }
}

export default MainPageNews;