import React, { Component } from 'react';
import * as api from '../api';
import './Comments.css';
import moment from 'moment';

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount = () => {
    api.fetchComments(this.props.articleId).then(data => {
      this.setState({ comments: data.comments });
    });
  };

  render() {
    const { comments } = this.state;
    // console.log(comments[0], '*******');
    // console.log(comments[0]created_at, '******');

    return (
      <section className="comments-list">
        <h3>User Comments:</h3>
        {comments.map(comment => {
          return (
            <section className="comment-section" key={comment._id}>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <p>
                Created at:{' '}
                {moment(comment.created_at).format('DD MMM YYYY hh:mm a')}
              </p>
              <p>Posted by: {comment.created_by.username}</p>
            </section>
          );
        })}
      </section>
    );
  }
}

export default Comments;
