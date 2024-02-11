import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgSrc from './carousel-data.json';
import './Carousel.scss';
const CarouselComponent = () => {
  return (
    <Carousel>
      {imgSrc.map((item) => (
        <Carousel.Item key={item.imageID}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-100"
              src={item.url}
              alt={`Slide ${item.imageID}`}
              style={{
                maxHeight: '500px',
                objectFit: 'contain',
                width: 'auto',
                margin: 'auto',
              }}
            />
          </a>
          <Carousel.Caption>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
