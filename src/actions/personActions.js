import {
  FETCH_PERSONS,
  FETCH_PERSON,
  ADD_PERSON,
  EDIT_PERSON,
  DEL_PERSON
} from './types';

import axios from 'axios';

// Make a get request to fetch all persons in db
export const fetchPersons = () => async dispatch => {
  const res = await axios.get(
    'https://server-contactbook.herokuapp.com/persons/'
  );

  dispatch({
    type: FETCH_PERSONS,
    payload: res.data
  });
};

// Make a get request to fetch the selected person
export const fetchPerson = id => async dispatch => {
  const res = await axios.get(
    `https://server-contactbook.herokuapp.com/persons/${id}`
  );

  dispatch({
    type: FETCH_PERSON,
    payload: res.data
  });
};

// Make a post request to add new person into db
export const addPerson = person => async (dispatch, getState) => {
  const { userDetails } = getState().auth;
  const res = await axios.post(
    'https://server-contactbook.herokuapp.com/persons/',
    { ...person, userDetails }
  );

  dispatch({
    type: ADD_PERSON,
    payload: res.data
  });
};

// Make a delete request to delete that person on db
export const delPerson = id => async dispatch => {
  await axios.delete(`https://server-contactbook.herokuapp.com/persons/${id}`);

  dispatch({
    type: DEL_PERSON,
    payload: id
  });
};

// Make a put request to update the selected person on db
export const editPerson = person => async dispatch => {
  const res = await axios.put(
    `https://server-contactbook.herokuapp.com/persons/${person.id}`,
    person
  );

  dispatch({
    type: EDIT_PERSON,
    payload: res.data
  });
};
