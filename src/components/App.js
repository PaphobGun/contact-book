import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';
import Navbar from './layout/Navbar';
import Persons from './persons/Persons';
import AddPerson from './persons/AddPerson';
import EditPerson from './persons/EditPerson';
import About from './pages/About';
import NotFound from './pages/NotFound';

import '../App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Navbar />
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + '/'}
                component={Persons}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/persons/add'}
                component={AddPerson}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/persons/edit/:id'}
                component={EditPerson}
              />
              <Route
                exact
                path={process.env.PUBLIC_URL + '/about'}
                component={About}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
