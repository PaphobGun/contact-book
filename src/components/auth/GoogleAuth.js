import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions/googleAuthActions';

// from OAuth google
// here is documentation
// https://developers.google.com/api-client-library/javascript/reference/referencedocs#authentication
class GoogleAuth extends Component {
  componentDidMount() {
    // 'gapi' from window that included by google lib which is attached in script tag index.html
    window.gapi.load('client:auth2', () => {
      // A callback that will run when successfully load data (javascript) from gapi
      // to initialized our client ( async ) that return a promise
      window.gapi.client
        .init({
          // clientId from console.developer.google
          clientId:
            '962318506559-v2jo1aqh68jll34th5m61phdnatffp68.apps.googleusercontent.com',
          // scope that want to access from the user
          scope: 'email'
        })
        .then(() => {
          // get ref from auth obj and store in this component
          this.auth = window.gapi.auth2.getAuthInstance();
          // get the boolean from auth obj is it signedIn or not and pass it as arguement
          // to update state in redux store
          this.onAuthChange(this.auth.isSignedIn.get());
          // event listener ( method in prototype of isSigendIn from google api )
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // to check that is user signed in or not
  onAuthChange = isSignedIn => {
    const { signIn, signOut } = this.props;
    const userId = this.auth.currentUser.get().getId();
    const firstName = this.auth.currentUser.get().getBasicProfile().ofa;
    const lastName = this.auth.currentUser.get().getBasicProfile().wea;

    const currentUser = {
      userId,
      firstName,
      lastName
    };
    // call action creator signIn to set 'isSignedIn in redux store to be true'
    // and pass the id, first name, last name of current user as an arguement as well
    if (isSignedIn) {
      signIn(currentUser);
      // call action creator signOut to set 'isSignedIn in redux store to be false'
    } else {
      signOut();
    }
  };

  // to sign in with google account
  onSignIn = () => {
    this.auth.signIn();
  };

  // to sign out
  onSignOut = () => {
    this.auth.signOut();
  };

  renderGoogleButton() {
    const { isSignedIn } = this.props;

    if (isSignedIn === null) {
      return null;
      // if already signed in
    } else if (isSignedIn) {
      return (
        <button onClick={this.onSignOut} className="btn btn-danger">
          <i className="fab fa-google" /> Sign Out
        </button>
      );
      // if not signed in
    } else {
      return (
        <button onClick={this.onSignIn} className="btn btn-danger">
          <i className="fab fa-google" /> Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderGoogleButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
