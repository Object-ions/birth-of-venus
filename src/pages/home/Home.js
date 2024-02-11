import React, { useRef } from 'react';
import './Home.scss';
import homeData from './home-data.json';
import HomeImages from './HomeImages';

const Home = () => {
  return (
    <div className="Home">
      <div className="head-text">
        <h1>Birth of Venus</h1>
        <h4>Sandro Botticelli (Firenze 1445 – 1510)</h4>
        <p>{homeData.description[0]}</p>
        <p>{homeData.description[1]}</p>
        <p>{homeData.description[2]}</p>
      </div>
      <HomeImages />
      <div className="disclaimer">
        <p>{homeData.disclaimer[0]}</p>
      </div>
    </div>
  );
};

export default Home;
