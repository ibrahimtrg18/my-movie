import authTypes from "../types/authTypes";

const INITIAL_STATE = {
  requestToken: "",
  userToken: "",
  userSession: "",
  account: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.FETCH_AUTHENTICATION_TOKEN_NEW: {
      return { ...state, requestToken: action.payload };
    }
    case authTypes.FETCH_AUTHENTICATION_TOKEN_VALIDATE_WITH_LOGIN: {
      return { ...state, userToken: action.payload };
    }
    case authTypes.FETCH_AUTHENTICATION_SESSION_NEW: {
      return { ...state, userSession: action.payload };
    }
    case authTypes.FETCH_ACCOUNT: {
      return { ...state, account: action.payload };
    }
    case authTypes.LOGOUT_ACCOUNT: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
