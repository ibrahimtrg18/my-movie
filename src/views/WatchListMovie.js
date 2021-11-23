import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
import Pagination from "../components/Pagination";
// actions
import { fetchWatchlistMovies } from "../redux/actions/movieAction";

const WatchListMovie = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const watchlistMovies = useSelector((state) => state.watchlistMovies);

  useEffect(() => {
    dispatch(fetchWatchlistMovies({ page }));
  }, [page]);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {watchlistMovies.loading
          ? [...Array(6)].map((v, i) => (
              <CardMovie key={i} loading={watchlistMovies.loading} />
            ))
          : watchlistMovies.value &&
            watchlistMovies.value.map((movie, i) => (
              <CardMovie
                key={i}
                movie={movie}
                loading={watchlistMovies.loading}
              />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default WatchListMovie;
