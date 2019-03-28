import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPersons } from '../../actions/personActions';
import { Redirect } from 'react-router-dom';
import Header from '../layout/Header';
import Person from './Person';
import Spinner from '../layout/Spinner';

// Fetch persons from server and render all of it
class Persons extends Component {
  componentDidMount() {
    // Fetch all persons from api when page is loaded
    this.props.fetchPersons();
  }

  // Custom function to render all person
  renderPersons = () => {
    const { persons } = this.props;
    return persons.map(person => <Person key={person.id} person={person} />);
  };

  render() {
    const { persons, isSignedIn } = this.props;

    // If user is not signed in redirect to welcome page
    if (!isSignedIn) return <Redirect to="/" />;

    // render spinner when waiting for ajax call
    if (persons.length === 0) return <Spinner />;

    return (
      <>
        <Header />
        <div className="container mt-5">{this.renderPersons()} </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.person.persons,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPersons }
)(Persons);
