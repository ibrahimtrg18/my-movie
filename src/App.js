import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// components
import Layout from "./components/Layout";
import TopRateMovie from "./views/TopRateMovie";
import UpcomingMovie from "./views/UpcomingMovie";
import NowPlayingMovie from "./views/NowPlayingMovie";
import PopularMovie from "./views/PopularMovie";
import WatchListMovie from "./views/WatchListMovie";
import SearchMovie from "./views/SearchMovie";
// actions
import { fetchGenresMovie } from "./redux/actions/movieAction";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchGenresMovie());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/movie/top_rated" element={<TopRateMovie />} />
          <Route path="/movie/upcoming" element={<UpcomingMovie />} />
          <Route path="/movie/now_playing" element={<NowPlayingMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/search" element={<SearchMovie />} />
          <Route
            path="/movie/watchlist"
            element={
              auth.userSession ? <WatchListMovie /> : <Navigate to="/" />
            }
          />
          <Route
            path="*"
            element={<Navigate replace to="/movie/top_rated" />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
