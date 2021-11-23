import upcomingMovieTypes from "../types/upcomingMovieTypes";

const INITIAL_STATE = {
  loading: false,
  value: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case upcomingMovieTypes.FETCH_UPCOMING_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case upcomingMovieTypes.FETCH_UPCOMING_MOVIE_SUCCESS: {
      return { ...state, value: action.payload, loading: false };
    }
    case upcomingMovieTypes.FETCH_UPCOMING_MOVIE_FAILURE: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
