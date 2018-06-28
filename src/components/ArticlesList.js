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
                <Link
                  className="link article-title__link title_case"
                  to={`/articles/${article._id}`}
                >
                  {article.title.toLowerCase()}
                </Link>
                <ul className="article-meta">
                  <li className="article-meta__item">
                    {article.comments} comments
                  </li>
                  <li className="article-meta__item left">
                    {article.votes} votes
                  </li>
                  <li className="article-meta__item left">
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
