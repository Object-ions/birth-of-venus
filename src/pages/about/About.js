import React from 'react';
import data from './about-data.json';
import './About.scss';

const About = () => {
  return (
    <div className="About">
      <img src="/site-images/venus-sketch.png" alt="Digital tribute" />
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.head}</h3>
          <p>{item.p}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
