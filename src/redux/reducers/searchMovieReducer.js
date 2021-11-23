import searchMovieTypes from "../types/searchMovieTypes";

const INITIAL_STATE = {
  loading: false,
  value: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchMovieTypes.FETCH_SEARCH_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case searchMovieTypes.FETCH_SEARCH_MOVIE_SUCCESS: {
      return { ...state, value: action.payload, loading: false };
    }
    case searchMovieTypes.FETCH_SEARCH_MOVIE_FAILURE: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
