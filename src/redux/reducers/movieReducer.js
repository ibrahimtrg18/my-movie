import movieType from "../types/movieTypes";

const INITIAL_STATE = {
  nowPlayingMovies: [],
  popularMovies: [],
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieType.FETCH_NOW_PLAYING_MOVIES: {
      return { ...state, nowPlayingMovies: action.payload };
    }
    case movieType.FETCH_POPULAR_MOVIES: {
      return { ...state, popularMovies: action.payload };
    }
    case movieType.FETCH_GENRES_MOVIE: {
      return { ...state, genres: action.payload };
    }
    default:
      return state;
  }
};
