/**
 * The 'useSearchParams' hook is a highly efficient tool that allows you to
 * manage the URL search parameters in your React app. It returns an object
 * with two properties: 'searchParams' and 'setSearchParams.' This hook
 * simplifies the manipulation of URL search parameters in your React app,
 * for instance, updating the URL when the user selects a filter or sorting
 * option. 'useSearchParams' can be used to seamlessly integrate the state of
 * a component with the browser's URL, ensuring that changes in your
 * component's state are both reflected in and not influenced by the URL.
 */

import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import movies from "../data/movies.jsx";

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    // This condition ensures that we do not loop through the movies again
    // (re-rendering) if there's no change in the query. It also prevents the
    // URL from adding the '?query=' when the page is loaded for the first time.
    if (query !== initialQuery) {
      setSearchParams({ query: query || "" }, { replace: true });
    }

    if (query.length === 0) {
      setSearchParams({}, { replace: true });
    }
  }, [setSearchParams, query, initialQuery]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const moviesList = filteredMovies.map((movie) => (
    <li key={movie.id}>
      {movie.title} ({movie.year})
    </li>
  ));

  const notFound = <li>Movie not found</li>;

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
          onChange={(event) => setQuery(event.target.value.trim())}
        />
        <ul>{filteredMovies.length > 0 ? moviesList : notFound}</ul>
      </section>
    </div>
  );
}

export default Movies;
