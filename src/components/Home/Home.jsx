import React, { useEffect, useState } from "react";
import ShowCart from "../ShowCart/ShowCart";

const Home = ({ handlebtn }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="row movie-container container">
      {movies.map((movie) => (
        <ShowCart handlebtns={handlebtn} movie={movie}></ShowCart>
      ))}
    </div>
  );
};

export default Home;
