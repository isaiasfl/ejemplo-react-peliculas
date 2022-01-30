import React, { useState, useEffect } from "react";
import Pelicula from "./Pelicula";
import estilos from "./css/PeliculasPlantilla.module.css";
import getPeliculas from "../helpers/getPeliculas";
import { Oval } from "react-loader-spinner";

export function PeliculasPlantilla() {
  // declaro los estados
  const [peliculas, setPeliculas] = useState([]);
  // uso el useEffect cuando se modifica la PeliculaEstado.
  const [cargando, setCargando] = useState(true); // estado para el spinner

  useEffect(() => {
    setCargando(true);
    getPeliculas().then((newResultado) => {
      setPeliculas(newResultado);
      setCargando(false);
    });
  }, []);
  // [] un corchete vacío significa que sólo se va a ejecutar
  if (cargando) {
    return (
      <div className={estilos.spinner}>
        <Oval color="#DF2D07" height={80} width={80} />
      </div>
    );
  }
  // una vez la función useEffect
  // Por contra si colocamos algo dentro de los corchetes significa
  // que cuando se modifique lo que hemos colocado en los corchetes
  // entonces se volverá a llamar a useEffect y por tanto a renderizar
  // el componente.
  return (
    <ul className={estilos.moviesGrid}>
      {peliculas.map((peli, index) => (
        <Pelicula
          key={peli.id}
          title={peli.title}
          poster_path={peli.poster_path}
          id={peli.id}
        />
      ))}
    </ul>
  );
}
