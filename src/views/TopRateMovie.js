import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
// actions
import { fetchTopRatedMovies } from "../redux/actions/movieAction";

const TopRateMovie = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, []);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {topRatedMovies &&
          topRatedMovies.map((movie, i) => <CardMovie key={i} movie={movie} />)}
      </div>
    </div>
  );
};

export default TopRateMovie;
