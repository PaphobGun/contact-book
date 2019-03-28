import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delPerson } from '../../actions/personActions';
import PropTypes from 'prop-types';

// Delete the selected person ( filter by id )
const deletePerson = (id, delPerson) => {
  // Call an action
  delPerson(id);
};

// User will only see the button on the contact that user added by his/her own only
const renderButtonEditAndDelete = (userId, id, currentUserId, delPerson) => {
  if (userId === currentUserId) {
    return (
      <div className="card-footer">
        <div className="btn-group">
          <Link className="btn btn-info" to={`/persons/edit/${id}`}>
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => deletePerson(id, delPerson)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
};

// Infomation for each person
const Person = props => {
  const {
    firstName,
    lastName,
    email,
    phone,
    id,
    userFirstName,
    userLastName,
    userId
  } = props.person;

  const { delPerson, currentUserId } = props;

  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <div className="card mb-4">
          <div className="card-header bg-danger clearfix">
            <h4 className="text-white">{firstName}</h4>
            <small className="text-white">
              Added by {userFirstName} {userLastName}
            </small>
          </div>
          <div className="card-body text-secondary">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </div>
          {renderButtonEditAndDelete(userId, id, currentUserId, delPerson)}
        </div>
      </div>
    </div>
  );
};

Person.propTypes = {
  currentUserId: PropTypes.string,
  delPerson: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.userDetails.userId
  };
};

export default connect(
  mapStateToProps,
  { delPerson }
)(Person);
