import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./Home.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const popularURL = import.meta.env.VITE_POPULAR;
const relaseURL = import.meta.env.VITE_RELEASE;

const Home = () => {
  const [topMovies, setTopMovie] = useState([]);
  const [option, setOption] = useState(1);
  const currentDate = new Date().toISOString().split("T")[0];
  const getTopRatedMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovie(data.results);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.matches(".mais-vistos")) {
        setOption(1);
      } else if (event.target.matches(".mais-recomendados")) {
        setOption(2);
      } else if (event.target.matches(".lancamentos")) {
        setOption(3);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const setTitle = () => {
    if (option === 1) {
      return "Filmes mais populares:";
    } else if (option === 2) {
      return "Filmes com melhores avalições:";
    } else if (option === 3) {
      return "Lançamentos recentes:";
    }
  };

  useEffect(() => {
    let tmpURL = "";
    if (option === 1) {
      let popularUrl = `${popularURL}?${apiKey}`;
      tmpURL = popularUrl;
    } else if (option === 2) {
      let topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
      tmpURL = topRatedUrl;
    } else if (option === 3) {
      let orderedUrl = `${relaseURL}?${apiKey}&sort_by=release_date.desc&release_date.lte=${currentDate}`;
      tmpURL = orderedUrl;
    }

    console.log(tmpURL);
    getTopRatedMovie(tmpURL);
  }, [option]);

  return (
    <div className="container">
      <h2 className="title">{setTitle()}</h2>
      <div className="movies-container">
        {topMovies != null &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
