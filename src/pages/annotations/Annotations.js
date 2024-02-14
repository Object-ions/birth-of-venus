import React from 'react';
import './Annotations.scss';
import data from './annotations.json';
import text from './annotations-text.json';
import AnnotationItem from './AnnotationItem';

const fresco = data[0];
const engraving = data[1];
const statue = data[2];
const Annotations = () => {
  return (
    <div className="Annotations">
      <div className="annotations-intro">
        <h1>{text[0].title}</h1>
        <h2>{text[0].subtitle}</h2>
        {/* <p>By: {text[0].by}</p> */}
        <div className="intro-text">
          <p>{text[0].introduction}</p>
        </div>
      </div>
      <div className="annotations-body">
        <AnnotationItem item={fresco} className="fresco" />
        <AnnotationItem item={engraving} className="engraving" />
        <AnnotationItem item={statue} className="statue" />
      </div>
      <div className="annotations-conclusion">
        <h4>Conclusion:</h4>
        <p>{text[0].conclusion}</p>
      </div>
    </div>
  );
};

export default Annotations;
