import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import GoogleAuth from '../auth/GoogleAuth';

// Navbar
class Navbar extends Component {
  // user will see the menu by sign in only
  renderMenu() {
    const { firstName, lastName } = this.props.userDetails;

    if (this.props.isSignedIn)
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
              <NavItem icon="fas fa-home" text="Home" path="/" />
              <NavItem
                icon="fas fa-plus-square"
                text="Add Contact"
                path="/persons/add"
              />
              <NavItem
                icon="fas fa-question-circle"
                text="About"
                path="/about"
              />
            </ul>{' '}
            <div className="ml-auto mr-3 btn btn-info mb-resp">
              Welcome! {firstName[0]}
              {lastName[0]}
            </div>
          </div>
        </>
      );
  }

  // If user is not signed In user ill still see the About menu
  renderAbout() {
    if (!this.props.isSignedIn) {
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
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Contact Book
          </Link>
          {this.renderMenu()}
          {this.renderAbout()}
          <GoogleAuth />
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userDetails: state.auth.userDetails
  };
};

export default connect(mapStateToProps)(Navbar);
