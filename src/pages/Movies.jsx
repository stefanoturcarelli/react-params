import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movies.jsx";

function Movies() {
  const moviesList = movies.map((movie) => (
    <li key={movie.id}>
      {movie.title} ({movie.year})
    </li>
  ));

  return (
    <div>
      <h2>
        <Link to="/">Return</Link>
      </h2>
      <section>
        <input
          type="text"
          placeholder="Search movies"
          aria-label="Search movies"
        />
        <ul>{moviesList}</ul>
      </section>
    </div>
  );
}

export default Movies;
