import React, { Component } from 'react';
import * as api from '../api';
import Comments from './Comments';
import { Link } from 'react-router-dom';
import './Article.css';
import voteUp from '../images/vote-up.png';
import voteDown from '../images/vote-down.png';
import { Redirect } from 'react-router-dom';

class Article extends Component {
  state = {
    belongs_to: '',
    body: '',
    comments: 0,
    title: '',
    username: '',
    votes: 0,
    invalidUrl: false
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
      )
      .catch(err => {
        this.setState({
          invalidUrl: true
        });
      });
  };

  render() {
    const article_id = this.props.match.params.article_id;
    if (this.state.invalidUrl) return <Redirect to="/404" />;
    const { belongs_to, body, comments, title, username, votes } = this.state;
    return (
      <div className="article-page-container">
        <div className="article-section">
          <section className="article-individual">
            <h3 className="h3 title_case">{title.toLowerCase()}</h3>
            <p className="article-body">{body}</p>
            <p>
              See more {belongs_to} articles
              <Link className="link" to={`/topics/${belongs_to}`}>
                <span className="span-link__topics"> here</span>
              </Link>
            </p>
          </section>
          <section className="article-info">
            <ul className="article-info__list">
              <li className="article-info__list--item">Posted by {username}</li>
              <li className="article-info__list--item">Comments: {comments}</li>
              <li className="article-info__list--item">Votes: {votes}</li>
            </ul>
            <div className="vote-up-container">
              <img
                className="vote-up-image pointer"
                src={voteUp}
                alt="vote up"
                onClick={() => this.handleVoteArticleClick('up')}
              />
              <p
                className="pointer vote-link link"
                onClick={() => this.handleVoteArticleClick('up')}
              >
                Vote &uarr;
              </p>
            </div>
            <div className="vote-down-container">
              <img
                className="vote-down-image pointer"
                src={voteDown}
                alt="vote down"
                onClick={() => this.handleVoteArticleClick('down')}
              />
              <p
                className="pointer vote-link link"
                onClick={() => this.handleVoteArticleClick('down')}
              >
                Vote &darr;
              </p>
            </div>
          </section>
        </div>
        <div className="comments-section-container">
          {this.state.comments && <Comments articleId={article_id} />}
          {this.state.comments === 0 && (
            <h2>
              No comments available for this article, please post one now!
            </h2>
          )}
        </div>
      </div>
    );
  }

  handleVoteArticleClick = amount => {
    const { votes } = this.state;
    const article_id = this.props.match.params.article_id;
    api
      .voteOnArticle(article_id, amount)
      .then(
        this.setState({
          votes: amount === 'up' ? votes + 1 : votes - 1
        })
      )
      .catch(console.log);
  };
}

export default Article;
