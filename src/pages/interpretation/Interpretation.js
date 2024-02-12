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
      <div className="article-image-wrapper">
        <img src="/exhibit/bofv2.png" alt="Birth of Venus" />
      </div>
      <ArticleHeader {...articleData} />
      {sectionData.map((section, index) => {
        const elements = [
          <ArticleSection key={`section-${index}`} section={section} />,
        ];

        // Add an image and a caption after the first section
        if (index === 0) {
          elements.push(
            <div key={`image-${index}`} className="article-image-wrapper">
              <img
                src={`/exhibit/bofv${index + 1}.png`}
                alt="Birth of Venus detail"
              />
              <p>
                Sandro Botticelli - Birth of Venus, detail (the face of Venus),
                1485. Image via Wikimedia
              </p>
            </div>
          );
        }

        // Add an image and a caption after the third section
        if (index === 2) {
          elements.push(
            <div key={`image-${index}`} className="article-image-wrapper">
              <img
                src={`/exhibit/bofv${index + 1}.png`}
                alt="Birth of Venus detail"
              />
              <p>
                Left: Sandro Botticelli - Birth of Venus, detail, 1485. Tempera
                on canvas, 172.5 x 278.5 cm. Courtesy of Uffizi / Right: Sandro
                Botticelli - Birth of Venus, detail (Hora of Spring), 1485.
                Image via Wikimedia
              </p>
            </div>
          );
        }

        // Return the array of elements (section, image, and caption)
        return elements;
      })}
    </div>
  );
};

export default Interpretation;
