import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPersons } from '../../actions/personActions';
import Person from './Person';

// Fetch persons from server and render all of it
class Persons extends Component {
  componentDidMount() {
    // Fetch all persons from api when page is loaded
    this.props.fetchPersons();
  }

  // Custom function to render all person
  renderPersons = () => {
    const { persons } = this.props;
    // // reverse 'persons' [array] to always set the newest at the top
    // persons.reverse();
    return persons.map(person => <Person key={person.id} person={person} />);
  };

  render() {
    const { persons } = this.props;

    // render spinner when waiting for ajax call
    if (persons.length === 0)
      return (
        <div className="container my-5 text-center">
          <div className="spinner-border text-primary" role="status" />
          <h1 className="mt-5 display-4 text-primary">Add New Contact</h1>
        </div>
      );

    return (
      <div className="container my-5">
        <h1 className="display-4 mb-5 text-primary">My Contacts</h1>
        {this.renderPersons()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.person.persons
  };
};

export default connect(
  mapStateToProps,
  { fetchPersons }
)(Persons);
