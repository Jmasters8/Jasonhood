import React from 'react';

class MainPageNewsItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="dashboard-articles">
        <div className="dashboard-articles-1">
          <article className="dashboard-articles-2">
            <a href={`${this.props.article.url}`} target="_blank"></a>
            <div className="dashboard-articles-source">
              <div className="dashboard-articles-source-1">
                <span>
                  {/* {lightningBolt} */}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default MainPageNewsItem;