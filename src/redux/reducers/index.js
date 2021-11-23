import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import topRatedMovieReducer from "./topRatedMovieReducer";

export default combineReducers({
  movie: movieReducer,
  topRatedMovies: topRatedMovieReducer,
});
