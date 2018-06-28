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
      this.setState({ comments: data.comments });
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.articleId !== prevProps.articleId) {
      api.fetchComments(this.props.articleId).then(data => {
        this.setState({ comments: data.comments });
      });
    }
  }

  render() {
    const { comments } = this.state;
    console.log(comments, 'daasdasdas');
    return (
      <section className="comments-container">
        <section className="post-comment">
          <h3>Post a comment!</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              className="comment-input"
              placeholder="Post your comment"
              required="true"
              value={this.state.commentInput}
              onChange={this.handleInput}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
        <h3 className="h3 user-comments">User Comments:</h3>
        {comments.map(comment => {
          return (
            <section className="comment-section" key={comment._id}>
              <p>{comment.body}</p>
              <p>Created by {comment.created_by.username}</p>
              <p>Created {moment(comment.created_at).fromNow()}</p>
              <p>Delete comment here</p>
              <p>Votes: {comment.votes}</p>

              <div className="vote-up-container">
                <img
                  className="vote-up-image pointer"
                  src={voteUp}
                  alt="vote up"
                  onClick={() => this.handleVoteCommentClick(comment._id, 'up')}
                />
                <p
                  className="pointer vote-link"
                  onClick={() => this.handleVoteCommentClick(comment._id, 'up')}
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
                  className="vote-link pointer"
                  onClick={() =>
                    this.handleVoteCommentClick(comment._id, 'down')
                  }
                >
                  Vote &darr;
                </p>
              </div>
            </section>
          );
        })}
      </section>
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
