import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/room">Alot Room</Link>
        </li>
        <li>
          <Link to="/book">Manage Books</Link>
        </li>
        <li>
          <Link to="#">Hello</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
