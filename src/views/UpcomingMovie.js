import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
// actions
import { fetchUpcomingMovies } from "../redux/actions/movieAction";

const UpcomingMovie = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {upcomingMovies &&
          upcomingMovies.map((movie, i) => <CardMovie key={i} movie={movie} />)}
      </div>
    </div>
  );
};

export default UpcomingMovie;
