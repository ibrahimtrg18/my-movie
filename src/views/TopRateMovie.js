import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
import Pagination from "../components/Pagination";
// actions
import { fetchTopRatedMovies } from "../redux/actions/movieAction";

const TopRateMovie = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const topRatedMovies = useSelector((state) => state.topRatedMovies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies({ page }));
  }, [page]);

  return (
    <div>
      <div className="p-3 sm:p-6 lg:p-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {topRatedMovies.loading
          ? [...Array(12)].map((v, i) => (
              <CardMovie key={i} loading={topRatedMovies.loading} />
            ))
          : topRatedMovies.value &&
            topRatedMovies.value.map((movie, i) => (
              <CardMovie
                key={i}
                movie={movie}
                loading={topRatedMovies.loading}
                actionAddWatchlist
              />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TopRateMovie;
