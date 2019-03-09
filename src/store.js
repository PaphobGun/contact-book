import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// This is initial state
const initialState = {};

// A middleware container right now has only one which is thunk
const middleware = [thunk];

// Create store and set multiple enhancer by compose
const store = createStore(
  rootReducer,
  initialState,
  compose(
    // spread all of middile ware into applyMiddleware
    applyMiddleware(...middleware),
    // enable redux devtools and set it to avaible even user doesn't have redux devtools
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose()
  )
);

export default store;
