import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Home() {
  const [pageUrl, setPageUrl] = useState(
    "https://api-allocine.herokuapp.com/api/movies/upcoming?p=2"
  );
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(pageUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [pageUrl]);

  if (!data) {
    return <h3>Loading...</h3>;
  }

  return (
    <React.Fragment>
      <button
        onClick={() =>
          setPageUrl(
            "https://api-allocine.herokuapp.com/api/movies/popular?p=2"
          )
        }
      >
        Popular Movies
      </button>
      <button
        onClick={() =>
          setPageUrl(
            "https://api-allocine.herokuapp.com/api/movies/upcoming?p=2"
          )
        }
      >
        Upcoming Movies
      </button>
      <button
        onClick={() =>
          setPageUrl(
            "https://api-allocine.herokuapp.com/api/movies/top_rated?p=3"
          )
        }
      >
        Top Rated Movies
      </button>
      {data.results.map((film) => {
        return (
          <div>
            <hr />
            <img
              src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${film.poster_path}`}
              alt={film.title}
            />
            <ul>
              <li>{film.title}</li>
              <li>{film.release_date}</li>
              <li>{film.overview}</li>
            </ul>
          </div>
        );
      })}
    </React.Fragment>
  );
}

ReactDOM.render(<Home />, document.getElementById("root"));
