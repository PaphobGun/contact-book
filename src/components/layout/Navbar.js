import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import GoogleAuth from '../auth/GoogleAuth';
import PropTypes from 'prop-types';

// user will see the menu by sign in only
const renderMenu = (firstName, lastName, isSignedIn) => {
  if (isSignedIn) {
    return (
      <>
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
            <NavItem icon="fas fa-home" text="Home" path="/persons" />
            <NavItem
              icon="fas fa-plus-square"
              text="Add Contact"
              path="/persons/add"
            />
            <NavItem icon="fas fa-question-circle" text="About" path="/about" />
          </ul>{' '}
          <div className="ml-auto mr-3 btn btn-info mb-resp">
            Welcome! {firstName[0]}
            {lastName[0]}
          </div>
        </div>
      </>
    );
  }
};

// If user is not signed In user ill still see the About menu
const renderAbout = isSignedIn => {
  if (!isSignedIn) {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-question-circle" /> About
          </Link>
        </li>
      </ul>
    );
  }
};

// Navbar
const Navbar = props => {
  const { firstName, lastName } = props.userDetails;
  const { isSignedIn } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        {renderMenu(firstName, lastName, isSignedIn)}
        {renderAbout(isSignedIn)}
        <GoogleAuth />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isSignedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userDetails: state.auth.userDetails
  };
};

export default connect(mapStateToProps)(Navbar);
