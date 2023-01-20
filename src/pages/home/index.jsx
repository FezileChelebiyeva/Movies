import React from "react";
import MoviesComponent from "../../components/movies";
import ShowsComponent from "../../components/shows";
import "./index.scss";
const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <MoviesComponent />
          <ShowsComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;
