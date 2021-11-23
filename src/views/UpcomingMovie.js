import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
import Pagination from "../components/Pagination";
// actions
import { fetchUpcomingMovies } from "../redux/actions/movieAction";

const UpcomingMovie = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const upcomingMovies = useSelector((state) => state.upcomingMovies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies({ page }));
  }, [page]);

  return (
    <div>
      <div className="p-3 sm:p-6 lg:p-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {upcomingMovies.loading
          ? [...Array(12)].map((v, i) => (
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
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default UpcomingMovie;
