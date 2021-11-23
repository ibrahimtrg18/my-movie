import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import topRatedMovieReducer from "./topRatedMovieReducer";
import upcomingMovieReducer from "./upcomingMovieReducer";
import nowPlayingMovieReducer from "./nowPlayingMovieReducer";
import popularMovieReducer from "./popularMovieReducer";

export default combineReducers({
  movie: movieReducer,
  topRatedMovies: topRatedMovieReducer,
  upcomingMovies: upcomingMovieReducer,
  nowPlayingMovies: nowPlayingMovieReducer,
  popularMovies: popularMovieReducer,
});
