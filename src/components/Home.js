import React, { useEffect, useRef } from 'react';
import './Home.scss';

const Home = () => {
  const numberOfImages = 13;
  const imagePath = './venus/';
  const imageExtension = '.png';

  const images = Array.from({ length: numberOfImages }, (_, index) => {
    return `${imagePath}${index + 1}${imageExtension}`;
  });

  const homeRef = useRef();

  useEffect(() => {
    const parallaxEffect = (e) => {
      const { clientX, clientY } = e;
      const xValue = clientX - window.innerWidth / 2;
      const yValue = clientY - window.innerHeight / 2;

      const parallax_el = homeRef.current.querySelectorAll('.parallax');
      parallax_el.forEach((el) => {
        const speedx = parseFloat(el.dataset.speedx);
        const speedy = parseFloat(el.dataset.speedy);

        el.style.transform = `translate(${xValue * speedx}px, ${
          yValue * speedy
        }px)`;
      });
    };

    window.addEventListener('mousemove', parallaxEffect);

    return () => {
      window.removeEventListener('mousemove', parallaxEffect);
    };
  }, []);

  return (
    <div className="Home">
      <div className="head-text">
        <h1> Birth of Venus </h1>
        <h4>Sandro Botticelli (Firenze 1445 – 1510)</h4>
      </div>
      <div className="home-images" ref={homeRef}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`parallax image-${index + 1}`}
            alt={`background ${index + 1}`}
            data-speedx={Math.random() * (0.1 - 0.05) + 0.05}
            data-speedy={Math.random() * (0.1 - 0.05) + 0.05}
          />
        ))}
      </div>
      <div className="disclaimer">
        <p>
          A reimagined digital adaptation of Botticelli's 'The Birth of Venus,'
          crafted specifically for an enhanced parallax effect. This image is
          not the original artwork.
        </p>
        <p>
          The Birth of Venus is a painting by the Italian artist Sandro
          Botticelli, probably made in the mid 1480s. It depicts the goddess
          Venus arriving at the shore after her birth, when she had emerged from
          the sea fully-grown. The painting is in the Uffizi Gallery in
          Florence, Italy.
        </p>
      </div>
    </div>
  );
};

export default Home;
