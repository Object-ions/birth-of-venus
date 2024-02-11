import { useEffect } from 'react';

// Custom hook for parallax effect
export const useParallaxEffect = (ref) => {
  useEffect(() => {
    const parallaxEffect = (e) => {
      const { clientX, clientY } = e;
      const xValue = clientX - window.innerWidth / 2;
      const yValue = clientY - window.innerHeight / 2;

      const parallaxElements = ref.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
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
  }, [ref]);
};
