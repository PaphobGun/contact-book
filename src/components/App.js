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
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Persons} />
              <Route exact path="/persons/add" component={AddPerson} />
              <Route exact path="/persons/edit/:id" component={EditPerson} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
