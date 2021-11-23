import watchlistMovieTypes from "../types/watchlistMovieTypes";

const INITIAL_STATE = {
  loading: false,
  value: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case watchlistMovieTypes.FETCH_WATCHLIST_MOVIE_REQUEST: {
      return { ...state, loading: true };
    }
    case watchlistMovieTypes.FETCH_WATCHLIST_MOVIE_SUCCESS: {
      return { ...state, value: action.payload, loading: false };
    }
    case watchlistMovieTypes.FETCH_WATCHLIST_MOVIE_FAILURE: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
