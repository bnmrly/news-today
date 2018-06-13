import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

class Articles extends Component {
  state = {
    articleData: []
  };

  componentDidMount = () => {
    this.fetchArticles();
  };

  render() {
    console.log(this.state.articleData);
    const articleData = this.state.articleData;
    return (
      <ul className="articles-all">
        {articleData.map(article => {
          return <li key={article.title}>{article.title}</li>;
        })}
      </ul>
    );
  }

  fetchArticles = () => {
    axios
      .get('https://ben-nc-news.herokuapp.com/API/articles')
      .then(({ data: { articles } }) => {
        console.log({ articles });
        this.setState({ articleData: articles });
      })
      .catch(err => err);
  };
}

export default Articles;
