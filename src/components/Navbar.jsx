import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";

const Navbar = ({ setOption }) => {
  const [search, setSearch] = useState("");

  const alterarOption = (number) => {
    if (number === 1) {
      setOption(1);
    } else if (number === 2) {
      setOption(2);
    } else if (number === 3) {
      setOption(3);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");

    console.log(search);
  };

  return (
    <nav className="main-navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MyMovies
        </Link>
      </h2>
      <div className="filters">
        <ul>
          <li>
            <a className="mais-vistos" onClick={alterarOption(1)}>
              Mais populares
            </a>
          </li>
          <li>
            <a className="mais-recomendados" onClick={alterarOption(2)}>
              Mais recomendados
            </a>
          </li>
          <li>
            <a className="lancamentos" onClick={alterarOption(3)}>
              Lançamentos
            </a>
          </li>
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        ></input>
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
