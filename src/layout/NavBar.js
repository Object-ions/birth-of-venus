import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const linkList = [
    { path: '/', name: 'Home' },
    { path: '/objectives', name: 'Objectives' },
    { path: '/interpretation', name: 'Interpretation' },
  ];
  return (
    <nav className="NavBar">
      <img src="#" alt="logo" />
      <ul>
        {linkList.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
