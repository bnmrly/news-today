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
        <article className="articles-all">
          {articleData.map(article => {
            return (
              <section className="article-title" key={article._id}>
                <Link className="link" to={`/articles/${article._id}`}>
                  {article.title}
                </Link>
                <ul className="article-meta">
                  <li className="article-meta__item">
                    Comments: {article.comments}
                  </li>
                  <li className="article-meta__item">Votes: {article.votes}</li>
                  <li className="article-meta__item">
                    Created by: {article.created_by.username}
                  </li>
                </ul>
              </section>
            );
          })}
        </article>
      );
    }
  }
}

export default ArticlesList;
