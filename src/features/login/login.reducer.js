import LoginTypes from './login.types';

const initState = {
  fetch: false,
  data: null,
  error: null,
};

export const LoginReducer = (state = initState, action) => {
  switch (action.type) {
    case LoginTypes.REQUEST_LOGIN:
      return { ...state, fetch: true };
    case LoginTypes.LOGIN_SUCCESS:
      return {
        ...state, fetch: false, data: action.data, error: null,
      };
    case LoginTypes.LOGIN_FAILURE:
      return {
        ...state, fetch: false, data: null, error: action.error,
      };
    default:
      return state;
  }
};
