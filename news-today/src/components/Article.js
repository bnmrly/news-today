import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {
  state = {
    belongs_to: '',
    body: '',
    title: ''
  };

  componentDidMount = () => {
    const {
      match: {
        params: { article_id }
      }
    } = this.props;
    // can add more props later
    this.fetchArticle(article_id).then(({ belongs_to, body, title }) => {
      this.setState({ belongs_to, body, title });
    });
  };

  render() {
    const { belongs_to, body, title } = this.state;
    return (
      <div>
        <p>{belongs_to}</p>
        <p>{body}</p>
        <p>{title}</p>
      </div>
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
