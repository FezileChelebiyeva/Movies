import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
const Details = () => {
  const [movie, setMovie] = useState({});
  const { imdbID } = useParams();

  const getData = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apiKey=398de975&i=${imdbID}`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <div className="text">
            <div className="title">{movie?.Title}</div>
            <div className="info">
              <p>IMDB Rating: {movie?.imdbRating}</p>
              <p>IMDB Votes: {movie?.imdbVotes}</p>
              <p>Runtime: {movie?.Runtime}</p>
              <p>Year: {movie?.Year}</p>
            </div>
            <div className="about">{movie.Plot}</div>
            <div className="actors">
              <div className="div">
                <div className="name">Director </div>{" "}
                <div className="value">{movie?.Director}</div>
              </div>
              <div className="div">
                <div className="name">Actors </div>{" "}
                <div className="value">{movie?.Actors}</div>
              </div>
              <div className="div">
                <div className="name">Generes </div>
                <div className="value">{movie?.Genre}</div>
              </div>
              <div className="div">
                <div className="name">Languages </div>
                <div className="value">{movie?.Language}</div>
              </div>
              <div className="div">
                <div className="name">Awards </div>
                <div className="value">{movie?.Awards}</div>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={movie?.Poster} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
