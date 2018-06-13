import React from 'react';
import { Link } from 'react-router-dom';
// import './Articles.css';

const ArticlesList = ({ articleData }) => {
  return (
    <ul className="articles-all">
      {articleData.map(article => {
        return (
          <li key={article._id}>
            <Link to={`articles/${article._id}`}>{article.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
