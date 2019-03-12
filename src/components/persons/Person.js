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

  renderButtonEditAndDelete(userId, id) {
    if (userId === this.props.currentUserId) {
      return (
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/persons/edit/${id}`}>
            Edit
          </Link>
          <button
            className="ml-2 btn btn-danger"
            onClick={this.deletePerson.bind(this, id)}
          >
            Delete
          </button>
        </div>
      );
    }
  }

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
      <div className="row">
        <div className="col-lg-9 mx-auto">
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
            {this.renderButtonEditAndDelete(userId, id)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.userDetails.userId
  };
};

export default connect(
  mapStateToProps,
  { delPerson }
)(Person);
