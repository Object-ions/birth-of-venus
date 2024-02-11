import React from 'react';
import './Objectives.scss';
import CarouselComponent from './CarouselComponent';

const Objectives = () => {
  const objectiveData = {
    Date: '1484ca',
    Museum: 'The Uffizi',
    Collection: 'Painting',
    Location: 'A12. BOTTICELLI Venus',
    Technique: 'Tempera on canvas',
    Size: '172.5 x 278.5 cm',
    Inventory: '1890 n. 878',
  };
  return (
    <div className="Objectives">
      <CarouselComponent />
      <h2>Objectives</h2>
      {Object.entries(objectiveData).map(([key, value], index) => (
        <React.Fragment key={index}>
          <strong>{key}</strong>: {value}
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Objectives;
