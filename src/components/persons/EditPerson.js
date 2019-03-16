import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchPerson, editPerson } from '../../actions/personActions';
import PropTypes from 'prop-types';

import AddForm from '../layout/AddForm';

// Edit person
class EditPerson extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    errors: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPerson(id);
  }

  // after it DidMount it will be rerender then this lifecycle will be run
  // if currentProps.person !== previousProps.person then update it to be currentProps.person
  componentDidUpdate(prevProps, state, snapshot) {
    if (this.props.person !== prevProps.person) {
      this.setState(this.props.person);
    }
  }

  // Controlled input
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // Submit the form to call personActions for make PATCH request
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

    const { id } = this.props.match.params;
    // Create obj of updatedPerson to send PUT request
    const updatedPerson = {
      id,
      firstName,
      lastName,
      email,
      phone,
      userFirstName: this.props.auth.firstName,
      userLastName: this.props.auth.lastName,
      userId: this.props.auth.userId
    };

    // Call action creator
    this.props.editPerson(updatedPerson);

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
    // If not signed In redirect to main page
    if (!this.props.isSignedIn) return <Redirect to="/" />;

    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-header bg-danger">
            <h3 className="text-white">Edit Information</h3>
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
    );
  }
}

EditPerson.propTypes = {
  person: PropTypes.object,
  isSignedIn: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    auth: state.auth.userDetails,
    person: state.person.person,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPerson, editPerson }
)(EditPerson);
