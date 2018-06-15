import React from 'react';
import * as api from '../api';
import ArticlesList from './ArticlesList';

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
    return (
      <div>
        <h2>{topic} Articles:</h2>
        <ArticlesList articleData={this.state.articleData} />
      </div>
    );
  }
}

export default Topic;
