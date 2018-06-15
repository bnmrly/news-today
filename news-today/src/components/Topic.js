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

  // check on an else condition for ternary
  render() {
    const topic = this.props.match.params.topic;
    if (topic === 'football') {
      console.log("it's football");
    } else console.log("it's another topic");
    return (
      <div>
        {topic === 'coding' ? (
          <img
            className="topic-image"
            src={codingArticlesImage}
            alt="coding Articles heading"
          />
        ) : topic === 'cooking' ? (
          <img
            className="topic-image"
            src={cookingArticlesImage}
            alt="cooking Articles heading"
          />
        ) : (
          <img
            className="topic-image"
            src={footballArticlesImage}
            alt="football Articles heading"
          />
        )}
        <ArticlesList articleData={this.state.articleData} />
      </div>
    );
  }
}

export default Topic;
