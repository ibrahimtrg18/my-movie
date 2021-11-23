import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
// actions
import { fetchPopularMovies } from "../redux/actions/movieAction";

const PopularMovie = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((state) => state.movie.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {popularMovies &&
          popularMovies.map((movie, i) => <CardMovie key={i} movie={movie} />)}
      </div>
    </div>
  );
};

export default PopularMovie;
