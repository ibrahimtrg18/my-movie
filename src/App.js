import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Layout from "./components/Layout";
import TopRateMovie from "./views/TopRateMovie";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/movie/top_rated" element={<TopRateMovie />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
