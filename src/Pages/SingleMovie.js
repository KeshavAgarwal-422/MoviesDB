import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://www.omdbapi.com/?apikey=4517819";

const SingleMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}&i=${id}`);
      const data = await response.json();

      setMovie(data);
      console.log(movie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [useParams]);
  const { Poster, Title, Plot, Year } = movie;
  return (
    <>
      <div key={id} className="single-movie">
        <img src={Poster} alt="Image not available" />
        <div>{Title}</div>
        <div></div>
        {Plot}
        {Year}
        <Link to={"/"}>Go back</Link>
      </div>
    </>
  );
};

export default SingleMovie;
