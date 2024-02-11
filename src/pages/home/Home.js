import React, { useRef } from 'react';
import './Home.scss';
import homeData from './home-data.json';
import ParallaxImage from '../../components/ParallaxImage';
import { useParallaxEffect } from '../../hooks/useParallaxEffect';

const Home = () => {
  const numberOfImages = 13;
  const imagePath = './venus/';
  const imageExtension = '.png';

  const images = Array.from(
    { length: numberOfImages },
    (_, index) => `${imagePath}${index + 2}${imageExtension}`
  );

  const homeRef = useRef();
  useParallaxEffect(homeRef);

  return (
    <div className="Home">
      <div className="head-text">
        <h1>Birth of Venus</h1>
        <h4>Sandro Botticelli (Firenze 1445 – 1510)</h4>
      </div>
      <div className="home-images" ref={homeRef}>
        {images.map((src, index) => (
          <ParallaxImage key={index} src={src} index={index} />
        ))}
        <img className="static-image" src="./venus/1.png" alt="static-bg" />
      </div>
      <div className="disclaimer">
        {homeData.disclaimer.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
