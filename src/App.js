import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// components
import Layout from "./components/Layout";
import TopRateMovie from "./views/TopRateMovie";
import UpcomingMovie from "./views/UpcomingMovie";
import NowPlayingMovie from "./views/NowPlayingMovie";
// actions
import { fetchGenresMovie } from "./redux/actions/movieAction";
import "./App.css";

function App() {
  const dispatch = useDispatch();

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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
