import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addPerson } from '../../actions/personActions';
import PropTypes from 'prop-types';

import AddForm from '../layout/AddForm';

// To add new person
class AddPerson extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    errors: {}
  };

  // Controlled input
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Submit the form to call personActions for make POST request
  onSubmit = e => {
    e.preventDefault();

    const { firstName, lastName, email, phone } = this.state;

    // Validation
    if (firstName === '') {
      this.setState({ errors: { firstName: 'First Name is required' } });
      return;
    }

    if (lastName === '') {
      this.setState({ errors: { lastName: 'Last Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone Number is required' } });
      return;
    }

    // Create obj of newPerson to send POST request
    const newPerson = {
      firstName,
      lastName,
      email,
      phone,
      userFirstName: this.props.auth.firstName,
      userLastName: this.props.auth.lastName,
      userId: this.props.auth.userId
    };

    // Call action creator
    this.props.addPerson(newPerson);

    // Clear State
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      errors: {}
    });

    // redirect to main page
    this.props.history.push('/');
  };

  render() {
    //if not signed in rediect to main page
    if (!this.props.isSignedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="card">
              <div className="card-header bg-danger">
                <h3 className="text-white">Add New Person</h3>
              </div>
              <div className="card-body">
                <AddForm
                  parentState={this.state}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddPerson.propTypes = {
  isSignedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    auth: state.auth.userDetails,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { addPerson }
)(AddPerson);
