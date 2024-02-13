import React from 'react';
import './AnnotationItem.scss';

const AnnotationItem = ({ item, className }) => {
  return (
    <div className={`AnnotationItem ${className}`}>
      <h3>{item.title}</h3>
      <div className="two-col">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="text">
          <p>{item.reference}</p>
          <div className="objectives">
            <p>Artist: {item.artist}</p>
            <p>Type: {item.type}</p>
            <p>Collection: {item.collection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnotationItem;
