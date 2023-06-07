import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Alot Room</a>
        </li>
        <li>
          <a href="#">Manage Books</a>
        </li>
        <li>
          <a href="#">Fine Management</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
