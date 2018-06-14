import React, { Component } from 'react';
import * as api from '../api';

class Article extends Component {
  state = {
    belongs_to: '',
    body: '',
    comments: 0,
    title: '',
    username: '',
    votes: 0
  };

  componentDidMount = () => {
    const {
      match: {
        params: { article_id }
      }
    } = this.props;
    api
      .fetchArticle(article_id)
      .then(
        ({
          belongs_to,
          body,
          comments,
          title,
          created_by: { username },
          votes
        }) => {
          this.setState({ belongs_to, body, comments, title, username, votes });
        }
      );
  };

  render() {
    const { belongs_to, body, comments, title, username, votes } = this.state;
    return (
      <section className="article-individual">
        <h3>{title}</h3>
        <p>{body}</p>
        <p>Topic: {belongs_to}</p>
        <p>Comments: {comments}</p>
        <p>Votes: {votes}</p>
        <p>Username: {username}</p>
      </section>
    );
  }
}

export default Article;
