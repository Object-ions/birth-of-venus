import React from 'react';
import './ArticleSection.scss';

const ArticleSection = ({ section }) => {
  const blockquoteIndex = section.paragraphs.findIndex((p) =>
    p.includes('Her differences from the antique form')
  );

  return (
    <div className="article-section">
      <h3>{section.title}</h3>
      {section.paragraphs.map((paragraph, index) => {
        if (index === blockquoteIndex) {
          return <blockquote key={index}>{paragraph}</blockquote>;
        }
        return (
          <p key={index} className="two-col">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
};

export default ArticleSection;
