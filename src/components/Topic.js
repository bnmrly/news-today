import React from 'react';
import * as api from '../api';
import ArticlesList from './ArticlesList';
import './Topic.css';
import codingArticlesImage from '../images/coding-articles.png';
import cookingArticlesImage from '../images/cooking-articles.png';
import footballArticlesImage from '../images/football-articles.png';

class Topic extends React.Component {
  state = {
    articleData: []
  };

  componentDidMount = () => {
    const topic = this.props.match.params.topic;
    api.fetchArticlesByTopic(topic).then(data => {
      this.setState({
        articleData: data
      });
    });
  };

  componentDidUpdate(prevProps) {
    const topic = this.props.match.params.topic;
    if (this.props.match.params.topic !== prevProps.match.params.topic) {
      api.fetchArticlesByTopic(topic).then(data => {
        this.setState({
          articleData: data
        });
      });
    }
  }

  render() {
    const topic = this.props.match.params.topic;
    const images = {
      cooking: cookingArticlesImage,
      coding: codingArticlesImage,
      football: footballArticlesImage
    };
    return (
      <div>
        <img
          className="topic-image"
          src={images[topic]}
          alt={`${topic} Articles heading`}
        />
        <ArticlesList articleData={this.state.articleData} />
      </div>
    );
  }
}

export default Topic;
