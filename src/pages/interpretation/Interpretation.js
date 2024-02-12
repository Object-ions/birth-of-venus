import React from 'react';
import './Interpretation.scss';
import ArticleHeader from './ArticleHeader';
import ArticleSection from './ArticleSection';
import data from './interpretation.json';

const Interpretation = () => {
  const articleData = data[0];
  const sectionData = data[1]['article-body'];

  return (
    <div className="Interpretation">
      <ArticleHeader {...articleData} />
      {sectionData.map((section, index) => (
        <ArticleSection key={index} section={section} />
      ))}
    </div>
  );
};

export default Interpretation;
