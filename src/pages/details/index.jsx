import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
              <p>Director: {movie?.Director}</p>
              <p>Actors: {movie?.Actors}</p>
              <p>Generes: {movie?.Genre}</p>
              <p>Awards: {movie?.Awards}</p>
              <p>Year: {movie?.Year}</p>
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
