import movieType from "../types/movieTypes";

const INITIAL_STATE = {
  topRatedMovies: [],
  upcomingMovies: [],
  nowPlayingMovies: [],
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieType.FETCH_TOP_RATED_MOVIES: {
      return { ...state, topRatedMovies: action.payload };
    }
    case movieType.FETCH_UPCOMING_MOVIE: {
      return { ...state, upcomingMovies: action.payload };
    }
    case movieType.FETCH_NOW_PLAYING_MOVIES: {
      return { ...state, nowPlayingMovies: action.payload };
    }
    case movieType.FETCH_GENRES_MOVIE: {
      return { ...state, genres: action.payload };
    }
    default:
      return state;
  }
};
