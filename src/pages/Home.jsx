import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>
        <Link to="/movies">Search movies</Link>
      </h2>
    </div>
  );
}

export default Home;
