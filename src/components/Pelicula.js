import React from 'react';
import estilos from "./css/pelicula.module.css";

const Pelicula= ({ title,poster_path,index }) => {
    // // comprobaciones
            // console.log({title});
            // console.log({poster_path});
            // console.log({id});
    const urlImagen="https://image.tmdb.org/t/p/w500"+poster_path;
    return (
        <li className={estilos.movieCard}>
            <img 
                width={230}
                height={345}
                src={urlImagen}
                alt={title}
                className={estilos.movieImage}
            />
            <div>{title}</div>
        </li>
    );
} 
export default Pelicula;

