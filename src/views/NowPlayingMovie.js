import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
// actions
import { fetchNowPlayingMovies } from "../redux/actions/movieAction";

const NowPlayingMovie = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((state) => state.nowPlayingMovies);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {nowPlayingMovies.loading
          ? [...Array(6)].map((v, i) => (
              <CardMovie key={i} loading={nowPlayingMovies.loading} />
            ))
          : nowPlayingMovies.value &&
            nowPlayingMovies.value.map((movie, i) => (
              <CardMovie
                key={i}
                movie={movie}
                loading={nowPlayingMovies.loading}
              />
            ))}
      </div>
    </div>
  );
};

export default NowPlayingMovie;
