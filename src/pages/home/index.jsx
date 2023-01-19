import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?apiKey=398de975&s=harry"
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="home">
      <div className="container">
        <div className="home">
          {data?.Search?.map((element) => {
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
    </div>
  );
};

export default Home;
