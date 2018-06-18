import React, { Component } from 'react';
import * as api from '../api';
import url from '../api';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import './Article.css';
import voteUp from '../images/vote-up.png';
import voteDown from '../images/vote-down.png';

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
    const article_id = this.props.match.params.article_id;
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
    const article_id = this.props.match.params.article_id;
    const { belongs_to, body, comments, title, username, votes } = this.state;
    return (
      <div className="article-page-container">
        <div className="article-section">
          <section className="article-individual">
            <h3 className="h3">{title}</h3>
            <p>{body}</p>
            <p>
              See more {belongs_to} articles
              <Link className="link" to={`/topics/${belongs_to}`}>
                <span className="span-link__topics"> here</span>
              </Link>
            </p>
          </section>
          <section className="article-info">
            <ul className="article-info__list">
              <li>Posted by {username}</li>
              <li>Comments: {comments}</li>
              <li>Votes: {votes}</li>
            </ul>
            <div className="vote-up-container">
              <img
                className="vote-up-image"
                src={voteUp}
                alt="vote up image"
                onClick={() => this.handleVoteClick('up')}
              />
              <p>Vote up</p>
            </div>
            <div className="vote-down-container">
              <img
                className="vote-down-image"
                src={voteDown}
                alt="vote down image"
                onClick={() => this.handleVoteClick('down')}
              />
              <p>Vote down</p>
            </div>
          </section>
        </div>

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
