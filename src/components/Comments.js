import React, { Component } from 'react';
import * as api from '../api';
import './Comments.css';
import moment from 'moment';

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
    return (
      <section className="comments-container">
        <section className="post-comment">
          <h3>Post a comment!</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              className="comment-input"
              placeholder="Post your comment"
              required="true"
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
              <p>Votes: {comment.votes}</p>
              <p>
                Created at:{' '}
                {moment(comment.created_at).format('DD MMM YYYY hh:mm a')}
              </p>
            </section>
          );
        })}
      </section>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    const { commentInput, comments } = this.state;
    // console.log(this.state);
    // console.log(comments);
    api.postComment(this.props.articleId, commentInput);
    this.setState({
      comments: [
        ...comments,
        { body: commentInput, created_at: moment().format(), votes: 0 }
      ]
    });
  };

  handleInput = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    this.setState({
      commentInput: value
    });
  };
}

export default Comments;
