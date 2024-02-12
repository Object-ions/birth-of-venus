import React from 'react';

const ArticleHeader = ({
  title,
  author,
  authorUrl,
  articleUrl,
  date,
  genre,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        By: <a href={authorUrl}>{author}</a>
      </p>
      <p>
        Original Article: <a href={articleUrl}>widewalls</a>
      </p>
      <p>Published: {date}</p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default ArticleHeader;
