import React from 'react';
import './Home.scss';

const Home = () => {
  const numberOfImages = 23;
  const imagePath = './venus/img';
  const imageExtension = '.png';

  const images = Array.from({ length: numberOfImages }, (_, index) => {
    return `${imagePath}${index + 1}${imageExtension}`;
  });

  const parallax_el = document.querySelectorAll('.parallax');
  let xValue = 0 - window.innerWidth / 2;
  let yValue = 0 - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;

    el.style.transform = `translateX(calc(-50% + ${
      -xValue * speedx
    }px) translateY(calc(-50% + ${yValue * speedy}px)`;
  });

  window.addEventListener('mousemove', (e) => {
    xValue = e.clientX;
    yValue = e.clientY;
    console.log(xValue, yValue);
  });

  return (
    <div className="Home">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          className={`parallax image-${index + 1}`}
          alt={`background ${index + 1}`}
          data-speedx={`0.${Math.floor(Math.random() * 1000)}`}
          data-speedy={`0.${Math.floor(Math.random() * 1000)}`}
        />
      ))}
    </div>
  );
};

export default Home;
