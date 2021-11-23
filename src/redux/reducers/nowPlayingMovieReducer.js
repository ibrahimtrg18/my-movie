import nowPlayingMovieTypes from "../types/nowPlayingMovieTypes";

const INITIAL_STATE = {
  loading: false,
  value: [],
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case nowPlayingMovieTypes.FETCH_NOW_PLAYING_MOVIES_REQUEST: {
      return { ...state, loading: true };
    }
    case nowPlayingMovieTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS: {
      return { ...state, value: action.payload, loading: false };
    }
    case nowPlayingMovieTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
