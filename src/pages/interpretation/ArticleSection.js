import React from 'react';

const ArticleSection = ({ section }) => {
  const blockquoteIndex = section.paragraphs.findIndex((p) =>
    p.includes('Her differences from the antique form')
  );

  return (
    <div>
      <h3>{section.title}</h3>
      {section.paragraphs.map((paragraph, index) => {
        if (index === blockquoteIndex) {
          return <blockquote key={index}>{paragraph}</blockquote>;
        }
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
};

export default ArticleSection;
