import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delPerson } from '../../actions/personActions';

// Infomation for each person
class Person extends Component {
  // Delete the selected person ( filter by id )
  deletePerson = id => {
    this.props.delPerson(id);
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      id,
      userFirstName,
      userLastName,
      userId
    } = this.props.person;

    return (
      <div className="card mb-4">
        <div className="card-header clearfix">
          <h4 className="text-secondary">{firstName}</h4>
          <small className="text-secondary">
            Added by {userFirstName} {userLastName}
          </small>
        </div>
        <div className="card-body text-secondary">
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
        </div>
        <div className="card-footer">
          <Link className="btn btn-info" to={`/persons/edit/${id}`}>
            Edit
          </Link>
          <button
            className="ml-2 btn btn-danger"
            onClick={this.deletePerson.bind(this, id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { delPerson }
)(Person);
