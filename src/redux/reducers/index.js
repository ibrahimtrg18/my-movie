import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import topRatedMovieReducer from "./topRatedMovieReducer";
import upcomingMovieReducer from "./upcomingMovieReducer";

export default combineReducers({
  movie: movieReducer,
  topRatedMovies: topRatedMovieReducer,
  upcomingMovies: upcomingMovieReducer,
});
