import React from 'react';
import './ArticleHeader.scss';

const ArticleHeader = ({
  title,
  author,
  authorUrl,
  articleUrl,
  date,
  genre,
}) => {
  return (
    <div className="ArticleHeader">
      <p>{date}</p>
      <p>
        By: <a href={authorUrl}>{author}</a>
      </p>
      <p>
        Origin: <a href={articleUrl}>widewalls</a>
      </p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default ArticleHeader;
