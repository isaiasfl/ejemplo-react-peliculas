import React from "react";
import { NavLink } from "react-router-dom";
import estilos from "./css/pelicula.module.css";

const Pelicula = ({ title, poster_path, id }) => {
  // // comprobaciones
  // console.log({title});
  // console.log({poster_path});
  // console.log({id});
  const urlImagen = "https://image.tmdb.org/t/p/w500" + poster_path;
  //const rutaPeliculasID = `/peliculas/${id}`;

  return (
    <li className={estilos.movieCard}>
      <NavLink to={`/peliculas/${id}`}>
        <img
          width={230}
          height={345}
          src={urlImagen}
          alt={title}
          className={estilos.movieImage}
        />
        <div>{title}</div>
      </NavLink>
    </li>
  );
};
export default Pelicula;
