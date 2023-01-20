import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);
  const getMoviesData = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?apiKey=398de975&s=harry"
    );
    setMovies(response.data);
  };

  useEffect(() => {
    getMoviesData();
  }, []);
  return (
    <div id="movies">
      <h4>Movies</h4>
      <div className="movies">
        {movies?.Search?.map((element) => {
          return (
            <Link key={element.imdbID} to={`/${element.imdbID}`}>
              <div className="card">
                <div className="img">
                  <img src={element.Poster} alt="" />
                </div>
                <div className="info">
                  <p className="title">{element.Title}</p>
                  <p className="title">{element.Year}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesComponent;
