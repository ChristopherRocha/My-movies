import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./Home.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchMovieUrl = `${searchUrl}?${apiKey}&query=${query}`;

    console.log(searchMovieUrl);
    getSearchMovie(searchMovieUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para:<span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies != null &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
