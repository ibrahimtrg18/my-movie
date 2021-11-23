import movieType from "../types/movieTypes";

const INITIAL_STATE = {
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case movieType.FETCH_GENRES_MOVIE: {
      return { ...state, genres: action.payload };
    }
    default:
      return state;
  }
};
