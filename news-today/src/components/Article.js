import React, { Component } from 'react';
import axios from 'axios';

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
    this.fetchArticle(article_id).then(
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

  fetchArticle = async article_id => {
    const { data } = await axios.get(
      `https://ben-nc-news.herokuapp.com/API/articles/${article_id}`
    );
    return data;
  };
}

export default Article;
