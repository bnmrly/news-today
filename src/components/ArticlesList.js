import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articleData }) => {
  console.log(
    articleData,
    'haefwtqYIKJHGSJDkuwqksadjwyhjadhgWHJ,Asdh,jhasdaj,dwha,jhg'
  );
  return (
    <ul className="articles-all">
      {articleData.map(article => {
        return (
          <li key={article._id}>
            <Link className="link" to={`/articles/${article._id}`}>
              {article.title}
            </Link>
            {/* <Link className="link" to={`/articles/${article._id}`}>
              {article.title}
            </Link> */}
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
