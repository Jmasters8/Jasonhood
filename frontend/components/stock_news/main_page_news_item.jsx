import React from 'react';

class MainPageNewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

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

    return (
      <div className="dashboard-articles-1">
        <article className="dashboard-articles-2">
          <a href={`${this.props.article.url}`} className="dashboard-article-link" target="_blank"></a>
          <div className="dashboard-articles-source">
            <div className="dashboard-articles-source-1">
              <span className="dashboard-articles-source-2">
                <img className="dashboard-articles-lightning" src="https://i.imgur.com/HXPDjIx.png" />
              </span>
              <span className="dashboard-articles-source-3">
                <span className="dashboard-articles-source-4">
                  {this.props.article.source}
                </span>
              </span>
              <span className="dashboard-articles-date">
                {convertTimestamp(this.props.article.datetime)}
              </span>
            </div>
          </div>

          <div className="dashboard-articles-content">
            <div className="dashboard-articles-title">
              <div className="dashboard-articles-title-1">
                <div className="dashboard-articles-title-2">
                  <span className="dashboard-articles-title-3">
                    {this.props.article.headline}
                  </span>
                </div>
                <div className="dashboard-article-summary">
                  <span className="dashboard-articles-summary-1">
                    {this.props.article.summary}
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-articles-img">
              <img src={`${this.props.article.image}`} className="dashboard-articles-img-1" />
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default MainPageNewsItem;