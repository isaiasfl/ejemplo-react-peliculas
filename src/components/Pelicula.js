import React from 'react';
import { Link } from 'react-router-dom';
import estilos from "./css/pelicula.module.css";

const Pelicula= ({ title,poster_path,id }) => {
    // // comprobaciones
            // console.log({title});
            // console.log({poster_path});
            // console.log({id});
    const urlImagen="https://image.tmdb.org/t/p/w500"+poster_path;
    //const rutaPeliculasID = `/peliculas/${id}`;
    //console.log(rutaPeliculasID);
    return (
        <li className={estilos.movieCard}>
          <Link to={`/peliculas/${id}`}> 
            <img 
                width={230}
                height={345}
                src={urlImagen}
                alt={title}
                className={estilos.movieImage}
            />
            <div>{title}</div>
         </Link>
        </li>
    );
} 
export default Pelicula;

