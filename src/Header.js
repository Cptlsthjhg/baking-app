// src/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <h1 className="title"><Link className='header-link' to ="/">Ethan's Cookie Site </Link></h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className='header-link' to="/recipes/ChocolateChipCookies">Chocolate Chip Cookies</Link>
          </li>
          <li className="nav-item">
            <Link className='header-link' to="/recipes/EverettC4">Everett's C4</Link>
          </li>
          <li className="nav-item">
            <Link className='header-link' to="/recipes/AidenGBC">Aiden's GBC</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
