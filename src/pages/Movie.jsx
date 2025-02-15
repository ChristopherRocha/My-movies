import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { BiWorld } from "react-icons/bi";
import "./Movie.css";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendar,
  BsEmojiSunglassesFill,
  BsPeopleFill,
} from "react-icons/bs";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  const FormatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="movie-page">
      {movie && (
        <div>
          <MovieCard movie={movie} showLink={false} />

          <div className="section-container">
            <div className="info-section">
              <div className="info">
                <BsCalendar />
                <span>Data de lançamento:</span>
                <p>{movie.release_date}</p>
              </div>
              <div className="info">
                <BsWallet2 />
                <span>Orçamento:</span>
                <p>{FormatCurrency(movie.budget)}</p>
              </div>
              <div className="info">
                <BsGraphUp />
                <span>Receita:</span>
                <p>{FormatCurrency(movie.revenue)}</p>
              </div>
            </div>

            <div className="info-section">
              <div className="info">
                <BsEmojiSunglassesFill />
                <span>Genêro:</span>
                <p>{movie.genres.map((genre) => genre.name).join("/")}</p>
              </div>
              <div className="info">
                <BiWorld />
                <span>País de origem:</span>
                <p>{movie.origin_country}</p>
              </div>

              <div className="info">
                <BsPeopleFill />
                <span>Popularidade:</span>
                <p>{movie.popularity}</p>
              </div>
            </div>
          </div>

          <div className="info">
            <BsFillFileEarmarkTextFill />
            <span>Descrição:</span>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
