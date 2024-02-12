import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const linkList = [
    { path: '/', name: 'Home' },
    { path: '/objectives', name: 'Objectives' },
    { path: '/interpretation', name: 'Interpretation' },
    { path: '/annotations', name: 'Annotations' },
    { path: '/about', name: 'About' },
  ];
  return (
    <nav className="NavBar">
      <h1 className="logotype">Birth of Venus</h1>
      <ul>
        {linkList.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
