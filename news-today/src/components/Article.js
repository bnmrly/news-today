import React, { Component } from 'react';
import * as api from '../api';
import Comments from './Comments';
import './Article.css';

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
    const {
      match: {
        params: { article_id }
      }
    } = this.props;
    const { belongs_to, body, comments, title, username, votes } = this.state;
    return (
      <div className="article-page-container">
        <section className="article-individual">
          <h3>{title}</h3>
          <p>{body}</p>
          <p>Topic: {belongs_to}</p>
          <p>Comment count: {comments}</p>
          <p>Votes: {votes}</p>
          <p>Username: {username}</p>
        </section>
        <section className="comments-container">
          {/* <Comments articleId={article_id} /> */}

          {this.state.comments && <Comments articleId={article_id} />}
          {this.state.comments === 0 && (
            <h2>
              No comments available for this article, please post one now!
            </h2>
          )}
        </section>
      </div>
    );
  }
}

export default Article;
