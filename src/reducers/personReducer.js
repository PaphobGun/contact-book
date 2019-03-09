import {
  FETCH_PERSONS,
  FETCH_PERSON,
  ADD_PERSON,
  EDIT_PERSON,
  DEL_PERSON
} from '../actions/types';

const initialState = {
  persons: [],
  person: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // put all persons from api to 'persons' [array]
    case FETCH_PERSONS:
      return {
        ...state,
        persons: action.payload
      };
    // put the selected person to the 'person' {obj}
    case FETCH_PERSON:
      return {
        ...state,
        person: action.payload
      };
    // add new person into the brginning of 'persons' [array]
    case ADD_PERSON:
      return {
        ...state,
        persons: [action.payload, ...state.persons]
      };
    // filter the deleted person out of the state
    case DEL_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.payload)
      };
    // Edit the selected person
    case EDIT_PERSON:
      return {
        ...state,
        // iterate over 'persons' [array] to find if that person.id is equal action.payload.id ( which is the one that was patched ) then set that person to equal action.payload
        persons: state.persons.map(person =>
          person.id === action.payload.id ? (person = action.payload) : person
        )
      };
    default:
      return state;
  }
};
