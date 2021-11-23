import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// components
import CardMovie from "../components/CardMovie";
import Pagination from "../components/Pagination";
import Input from "../components/Input";
// actions
import { fetchSearchMovies } from "../redux/actions/movieAction";

const SearchMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState("");
  const [page, setPage] = useState(1);
  let timeoutId = null;

  const searchMovies = useSelector((state) => state.searchMovies);

  useEffect(() => {
    timeoutId = setTimeout(() => setDebounceQuery(query), 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  useEffect(() => {
    dispatch(fetchSearchMovies({ query: debounceQuery, page }));
  }, [page, debounceQuery]);

  const onSearchChange = (e) => {
    setQuery(e.target.value);
    navigate(`/movie/search?query=${e.target.value}`);
  };

  return (
    <div>
      <div className="px-3 sm:px-6 lg:px-9 pt-4">
        <Input
          label="Search"
          id="search"
          name="search"
          type="text"
          placeholder="search"
          customClass="w-full"
          value={query}
          onChange={(e) => onSearchChange(e)}
        />
      </div>
      <div className="p-3 sm:p-6 lg:p-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {searchMovies.loading
          ? [...Array(12)].map((v, i) => (
              <CardMovie key={i} loading={searchMovies.loading} />
            ))
          : searchMovies.value &&
            searchMovies.value.map((movie, i) => (
              <CardMovie
                key={i}
                movie={movie}
                loading={searchMovies.loading}
                actionAddWatchlist
              />
            ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default SearchMovie;
