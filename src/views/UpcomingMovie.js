import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
// actions
import { fetchUpcomingMovies } from "../redux/actions/movieAction";

const UpcomingMovie = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((state) => state.upcomingMovies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, []);

  console.log(upcomingMovies);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {" "}
        {upcomingMovies.loading
          ? [...Array(6)].map((v, i) => (
              <CardMovie key={i} loading={upcomingMovies.loading} />
            ))
          : upcomingMovies.value &&
            upcomingMovies.value.map((movie, i) => (
              <CardMovie
                key={i}
                movie={movie}
                loading={upcomingMovies.loading}
                actionAddWatchlist
              />
            ))}
      </div>
    </div>
  );
};

export default UpcomingMovie;
