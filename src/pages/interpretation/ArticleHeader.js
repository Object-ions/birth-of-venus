import React from 'react';
import './ArticleHeader.scss';

const ArticleHeader = ({ author, authorUrl, articleUrl, date, genre }) => {
  return (
    <div className="ArticleHeader">
      <p>{date}</p>
      <p>
        By:{' '}
        <a
          href="https://www.widewalls.ch/author/balasz-takac"
          target="_blank"
          rel="noreferrer"
        >
          {author}
        </a>
      </p>
      <p>
        Origin:{' '}
        <a
          href="https://www.widewalls.ch/magazine/the-birth-of-venus-botticelli-painting"
          target="_blank"
          rel="noreferrer"
        >
          widewalls
        </a>
      </p>
      <p>Genre: {genre}</p>
    </div>
  );
};

export default ArticleHeader;
