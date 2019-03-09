import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

// Navbar
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <ul className="navbar-nav">
          <NavItem icon="fas fa-home" text="Home" path="/" />
          <NavItem
            icon="fas fa-plus-square"
            text="Add Contact"
            path="/persons/add"
          />
          <NavItem icon="fas fa-question-circle" text="About" path="/about" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
