import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  const linkList = [
    { path: '/', name: 'Home' },
    { path: '/interpretation', name: 'Interpretation' },
    { path: '/annotations', name: 'Annotations' },
    // { path: '/objectives', name: 'Objectives' },
    { path: '/about', name: 'About' },
  ];
  return (
    <nav className="NavBar">
      <Link to={'/'}>
        <h1 className="logotype">Birth of Venus</h1>
      </Link>
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
