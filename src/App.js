import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search";
import Analytics from "./components/Analytics";
import Scheduler from "./components/Scheduler";
import Header from "./components/Header";

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="scheduler" element={<Scheduler />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}