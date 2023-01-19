import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/details";
import Home from "../pages/home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:imdbID" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Routing;
