import constants from "../../utils/constants";
import movieType from "../types/movieTypes";

export const fetchTopRatedMovies =
  ({ page = 1 } = {}) =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `${constants.BASE_URL}/movie/top_rated?api_key=${constants.API_KEY}&page=${page}`
      );
      const data = await res.json();
      dispatch({
        type: movieType.FETCH_TOP_RATED_MOVIES,
        payload: data.results,
      });
    } catch (e) {
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
