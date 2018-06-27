import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api.js';

class ArticlesList extends Component {
  state = {
    articleData: []
  };

  componentDidMount = () => {
    api.fetchArticles().then(articles => {
      this.setState({ articleData: articles });
    });
  };

  render() {
    const { articleData } = this.state;
    if (!articleData.length) {
      return <p>Loading...</p>;
    } else {
      return (
        <ul className="articles-all">
          {articleData.map(article => {
            return (
              <li key={article._id}>
                <Link className="link" to={`/articles/${article._id}`}>
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }
}

export default ArticlesList;
