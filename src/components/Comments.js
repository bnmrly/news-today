import React, { Component } from 'react';
import * as api from '../api';
import './Comments.css';
import moment from 'moment';
import voteUp from '../images/vote-up.png';
import voteDown from '../images/vote-down.png';

class Comments extends Component {
  state = {
    commentInput: '',
    comments: []
  };

  componentDidMount = () => {
    api.fetchComments(this.props.articleId).then(data => {
      this.setState({
        comments: data.comments.sort((a, b) => b.created_at - a.created_at)
      });
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.articleId !== prevProps.articleId) {
      api.fetchComments(this.props.articleId).then(data => {
        this.setState({
          comments: data.comments.sort((a, b) => b.created_at - a.created_at)
        });
      });
    }
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="comments-container">
        <section className="post-comment">
          <h3 className="h3 comment-post">Post a comment</h3>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="comment-input"
              placeholder="Post your comment"
              required="true"
              value={this.state.commentInput}
              onChange={this.handleInput}
            />
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </section>
        <div className="all-comments">
          <h3 className="h3 user-comments">Comments</h3>
          {comments.map(comment => {
            return (
              <div className="comments-item" key={comment._id}>
                <section className="comment-individual">
                  <p className="comment-body">{comment.body}</p>
                </section>
                <section className="comment-info">
                  <ul className="comment-info__list">
                    <li className="comment-info__list--item">
                      Posted by {comment.created_by.username}
                    </li>
                    <li className="comment-info__list--item">
                      Created {moment(comment.created_at).fromNow()}
                    </li>
                    <li className="comment-info__list--item">
                      Delete comment here
                    </li>
                    <li className="comment-info__list--item">
                      Votes: {comment.votes}
                    </li>
                  </ul>
                  <div className="vote-up-container">
                    <img
                      className="vote-up-image pointer"
                      src={voteUp}
                      alt="vote up"
                      onClick={() =>
                        this.handleVoteCommentClick(comment._id, 'up')
                      }
                    />
                    <p
                      className="pointer vote-link link"
                      onClick={() =>
                        this.handleVoteCommentClick(comment._id, 'up')
                      }
                    >
                      Vote &uarr;
                    </p>
                  </div>
                  <div className="vote-down-container">
                    <img
                      className="vote-down-image pointer"
                      src={voteDown}
                      alt="vote down"
                      onClick={() =>
                        this.handleVoteCommentClick(comment._id, 'down')
                      }
                    />
                    <p
                      className="pointer vote-link link"
                      onClick={() =>
                        this.handleVoteCommentClick(comment._id, 'down')
                      }
                    >
                      Vote &darr;
                    </p>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const { commentInput, comments } = this.state;
    api.postComment(this.props.articleId, commentInput).then(comment => {
      this.setState({
        comments: [comment, ...comments],
        commentInput: ''
      });
    });
  };

  handleInput = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      commentInput: value
    });
  };

  handleVoteCommentClick = (comment_id, amount) => {
    const { comments } = this.state;
    const newComments = [...comments];
    api.voteOnComment(comment_id, amount);
    const index = newComments.findIndex(comment => {
      return comment._id === comment_id;
    });
    newComments[index].votes =
      amount === 'up'
        ? newComments[index].votes + 1
        : newComments[index].votes - 1;
    this.setState({
      comments: newComments
    });
  };
}

export default Comments;
