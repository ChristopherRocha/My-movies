import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const formatarNumero = (number) => {
    const roundedNumber = parseFloat(number.toFixed(1));
    return roundedNumber;
  };

  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title}></img>
      <h2>{movie.title}</h2>
      <p className="tagline">{movie.tagline}</p>
      <p className="estrela-avaliacao">
        <FaStar />
        {formatarNumero(movie.vote_average)}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
