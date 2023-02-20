import React from "react";
import { useGlobalContext } from "../Context";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movies } = useGlobalContext();

  return (
    <>
      <section className="movie">
        {movies.map((movie) => {
          const { img, title, type, year, id } = movie;
          return (
            <>
              <Link to={`/SingleMovie/${id}`} key={id}>
                <div className="card">
                  <div className="movie-content"></div>
                  <img src={img} alt="Avatar" />

                  <h4>
                    <b>{title}</b>
                  </h4>
                  <p>{year}</p>
                </div>
              </Link>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Movies;
