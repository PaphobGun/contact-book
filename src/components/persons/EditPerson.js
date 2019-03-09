import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPerson, editPerson } from '../../actions/personActions';
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
      phone
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
    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-header">
            <h3 className="text-secondary">Edit Information</h3>
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

const mapStateToProps = state => {
  return {
    person: state.person.person
  };
};

export default connect(
  mapStateToProps,
  { fetchPerson, editPerson }
)(EditPerson);
