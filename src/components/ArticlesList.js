import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api.js';

class ArticlesList extends Component {
  state = {
    articleData: [],
    loading: true
  };

  componentDidMount = () => {
    const topic = this.props.match.params.topic;
    const fetch = topic ? api.fetchArticlesByTopic : api.fetchArticles;
    fetch(topic).then(articles => {
      this.setState({
        articleData: articles,
        loading: false
      });
    });
  };

  componentDidUpdate = prevProps => {
    const topic = this.props.match.params.topic;
    if (this.props.match.params.topic !== prevProps.match.params.topic) {
      api.fetchArticlesByTopic(topic).then(data => {
        this.setState({
          articleData: data,
          loading: false
        });
      });
    }
  };

  render() {
    const { articleData, loading } = this.state;
    if (!articleData.length && loading) {
      return <h3>Loading...</h3>;
    } else if (!articleData.length && !loading) {
      return (
        <h3>
          There are no articles on this topic, please click on logo above to
          return to home...
        </h3>
      );
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
