import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  isSignedIn: null,
  userDetails: 'null'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userDetails: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userDetails: 'null'
      };
    default:
      return state;
  }
};
