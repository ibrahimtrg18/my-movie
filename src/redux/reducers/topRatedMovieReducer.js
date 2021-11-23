import topRatedMovieTypes from "../types/topRatedMovieTypes";

const INITIAL_STATE = {
  loading: false,
  value: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case topRatedMovieTypes.FETCH_TOP_RATED_MOVIES_REQUEST: {
      return { ...state, loading: true };
    }
    case topRatedMovieTypes.FETCH_TOP_RATED_MOVIES_SUCCESS: {
      return { ...state, value: action.payload, loading: false };
    }
    case topRatedMovieTypes.FETCH_TOP_RATED_MOVIES_FAILURE: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
