import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import GoogleAuth from '../auth/GoogleAuth';

// Navbar
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMain"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <NavItem icon="fas fa-home" text="Home" path="/" />
            <NavItem
              icon="fas fa-plus-square"
              text="Add Contact"
              path="/persons/add"
            />
            <NavItem icon="fas fa-question-circle" text="About" path="/about" />
          </ul>{' '}
        </div>
        <GoogleAuth />
      </div>
    </nav>
  );
};

export default Navbar;
