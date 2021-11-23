import popularMovieTypes from "../types/popularMovieTypes";

const INITIAL_STATE = {
  loading: false,
  value: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case popularMovieTypes.FETCH_POPULAR_MOVIES_REQUEST: {
      return { ...state, loading: true };
    }
    case popularMovieTypes.FETCH_POPULAR_MOVIES_SUCCESS: {
      return { ...state, value: action.payload, loading: false };
    }
    case popularMovieTypes.FETCH_POPULAR_MOVIES_FAILURE: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
