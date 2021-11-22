import movieType from "../types/movieTypes";

const INITIAL_STATE = {
  topRatedMovies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieType.FETCH_TOP_RATED_MOVIES: {
      return { ...state, topRatedMovies: action.payload };
    }
    default:
      return state;
  }
};
