import React from 'react';
import './Annotations.scss';
import data from './annotations.json';
import text from './annotations-text.json';
import AnnotationItem from './AnnotationItem';

const fresco = data[0];
const engraving = data[1];
const statue = data[2];

const Annotations = ({ fresco, engraving, statue }) => {
  return (
    <div className="Annotations">
      <div className="annotations-intro">
        <h1>{text[0].title}</h1>
        <h2>{text[0].subtitle}</h2>
        <p>By: {text[0].by}</p>
        <p>{text[0].introduction}</p>
      </div>
      <div className="annotations-body">
        <AnnotationItem {...fresco} />
        <AnnotationItem {...engraving} />
        <AnnotationItem {...statue} />
      </div>
      <div className="annotations-conclusion">
        <p>{text[0].conclusion}</p>
      </div>
    </div>
  );
};

export default Annotations;
