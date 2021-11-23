import constants from "../../utils/constants";
import topRatedMovieTypes from "../types/topRatedMovieTypes";
import upcomingMovieTypes from "../types/upcomingMovieTypes";
import nowPlayingMovieTypes from "../types/nowPlayingMovieTypes";
import popularMovieTypes from "../types/popularMovieTypes";
import movieType from "../types/movieTypes";

export const fetchTopRatedMovies =
  ({ page = 1 } = {}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: topRatedMovieTypes.FETCH_TOP_RATED_MOVIES_REQUEST,
      });
      const res = await fetch(
        `${constants.BASE_URL}/movie/top_rated?api_key=${constants.API_KEY}&page=${page}`
      );
      const data = await res.json();
      dispatch({
        type: topRatedMovieTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: topRatedMovieTypes.FETCH_TOP_RATED_MOVIES_FAILURE,
      });
      return e;
    }
  };

export const fetchUpcomingMovies =
  ({ page = 1 } = {}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: upcomingMovieTypes.FETCH_UPCOMING_MOVIE_REQUEST,
      });
      const res = await fetch(
        `${constants.BASE_URL}/movie/upcoming?api_key=${constants.API_KEY}&page=${page}`
      );
      const data = await res.json();
      dispatch({
        type: upcomingMovieTypes.FETCH_UPCOMING_MOVIE_SUCCESS,
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: upcomingMovieTypes.FETCH_UPCOMING_MOVIE_FAILURE,
      });
      return e;
    }
  };

export const fetchNowPlayingMovies =
  ({ page = 1 } = {}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: nowPlayingMovieTypes.FETCH_NOW_PLAYING_MOVIES_REQUEST,
      });
      const res = await fetch(
        `${constants.BASE_URL}/movie/now_playing?api_key=${constants.API_KEY}&page=${page}`
      );
      const data = await res.json();
      dispatch({
        type: nowPlayingMovieTypes.FETCH_NOW_PLAYING_MOVIES_SUCCESS,
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: nowPlayingMovieTypes.FETCH_NOW_PLAYING_MOVIES_FAILURE,
      });
      return e;
    }
  };

export const fetchPopularMovies =
  ({ page = 1 } = {}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: popularMovieTypes.FETCH_POPULAR_MOVIES_REQUEST,
      });
      const res = await fetch(
        `${constants.BASE_URL}/movie/popular?api_key=${constants.API_KEY}&page=${page}`
      );
      const data = await res.json();
      dispatch({
        type: popularMovieTypes.FETCH_POPULAR_MOVIES_SUCCESS,
        payload: data.results,
      });
    } catch (e) {
      dispatch({
        type: popularMovieTypes.FETCH_POPULAR_MOVIES_FAILURE,
      });
      return e;
    }
  };

export const fetchGenresMovie = () => async (dispatch) => {
  try {
    const res = await fetch(
      `${constants.BASE_URL}/genre/movie/list?api_key=${constants.API_KEY}`
    );
    const data = await res.json();
    dispatch({
      type: movieType.FETCH_GENRES_MOVIE,
      payload: data.genres,
    });
  } catch (e) {
    return e;
  }
};
