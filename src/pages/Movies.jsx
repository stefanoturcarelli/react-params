import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movies.js";

function Movies() {
  return (
    <div>
      <h2>
        <Link to="/">Return</Link>
      </h2>
    </div>
  );
}

export default Movies;
