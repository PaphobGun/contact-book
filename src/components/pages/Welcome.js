import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Welcome = props => {
  const { isSignedIn } = props;
  // If user is signed in redirect to main page
  if (isSignedIn) return <Redirect to="/persons" />;

  return (
    <div className="welcome">
      <div className="welcome__overlay">
        <h1>
          c<span className="text-danger">o</span>nt
          <span className="text-danger">a</span>ct b
          <span className="text-danger">o</span>ok
        </h1>
        <h3>Collect and note your contact details at one place...</h3>
        <Link to="/about" className="welcome__overlay--btn about">
          About
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(Welcome);
