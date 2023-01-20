import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const ShowsComponent = () => {
  const [shows, setShows] = useState([]);
  const getShowsData = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?apiKey=398de975&s=friends"
    );
    setShows(response.data);
  };
  useEffect(() => {
    getShowsData();
  }, []);
  return (
    <div id="shows">
      <h4>Shows</h4>
      <div className="shows">
        {shows?.Search?.map((element) => {
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

export default ShowsComponent;
