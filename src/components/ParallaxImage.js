import React from 'react';

// Image component for each parallax image
const ParallaxImage = React.memo(({ src, index }) => {
  const speedx = Math.random() * (0.1 - 0.05) + 0.05;
  const speedy = Math.random() * (0.1 - 0.05) + 0.05;

  return (
    <img
      key={index}
      src={src}
      className={`parallax image-${index + 1}`}
      alt={`background ${index + 1}`}
      data-speedx={speedx}
      data-speedy={speedy}
    />
  );
});

export default ParallaxImage;
