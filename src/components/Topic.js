import React from 'react';
import './Topic.css';
import codingArticlesImage from '../images/coding-articles.png';
import cookingArticlesImage from '../images/cooking-articles.png';
import footballArticlesImage from '../images/football-articles.png';

const Topic = props => {
  const topic = props.match.params.topic;
  const images = {
    cooking: cookingArticlesImage,
    coding: codingArticlesImage,
    football: footballArticlesImage
  };

  return (
    <div>
      <img className="topic-image" src={images[topic]} alt="" />
    </div>
  );
};

export default Topic;
