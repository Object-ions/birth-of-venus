import React, { useRef } from 'react';
import ParallaxImage from '../../components/ParallaxImage';
import { useParallaxEffect } from '../../hooks/useParallaxEffect';
import './HomeImages.scss';

const HomeImages = () => {
  const numberOfImages = 11;
  const imagePath = './venus/';
  const imageExtension = '.png';

  const images = Array.from(
    { length: numberOfImages },
    (_, index) => `${imagePath}${index + 3}${imageExtension}`
  );

  const homeRef = useRef();
  useParallaxEffect(homeRef);
  return (
    <div className="home-images" ref={homeRef}>
      {images.map((src, index) => (
        <ParallaxImage key={index} src={src} index={index} />
      ))}
      <img className="static-image" src="./venus/1.png" alt="static-bg" />
    </div>
  );
};

export default HomeImages;
