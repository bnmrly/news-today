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
          <button onClick={() => this.handleVoteClick('up')}>Vote Up</button>
          <button onClick={() => this.handleVoteClick('down')}>
            Vote Down
          </button>
          <p>Username: {username}</p>
        </section>
        <section className="comments-container">
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

  // optimistic rendering here, could use then block instead
  handleVoteClick = amount => {
    const { votes } = this.state;
    const article_id = this.props.match.params.article_id;
    api.voteOnArticle(article_id, amount);
    this.setState({
      votes: amount === 'up' ? votes + 1 : votes - 1
    });
  };
}

export default Article;
