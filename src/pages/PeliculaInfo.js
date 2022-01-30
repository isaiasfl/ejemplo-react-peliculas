import React, { useEffect, useState } from "react";
import estilo from "./PeliculaInfo.module.css";
import { useParams } from "react-router-dom";
import getPeliculaID from "../helpers/getPeliculaID";

const PeliculaInfo = () => {
  //capturo el parámetro desde <Route path="/peliculas/:peliculaID" en App.js
  const { peliculaID } = useParams();
  const [isCancelled, setIsCancelled] = useState(false);
  const [peliculaConID, setPeliculaConID] = useState(null);

  useEffect(() => {
    getPeliculaID(peliculaID).then((pelicula) => {
      if (!isCancelled) {
        setPeliculaConID(pelicula);
      }
    });
    return () => {
      setIsCancelled(true);
    };
  }, [isCancelled, peliculaID]);

  if (!peliculaConID) {
    // esto es para que no se ejecute el return a no ser que tengamos algo traido desde la API
    return null;
  }
  const urlImagenInfo =
    "https://image.tmdb.org/t/p/w500/" + peliculaConID.poster_path;

  return (
    <div className={estilo.detalle}>
      <img
        className={`${estilo.columnas} ${estilo.movieImage}`}
        src={urlImagenInfo}
        alt={peliculaConID.original_title}
        width={230}
        height={345}
      />
      <div className={estilo.columnas}>
        <p>ID: {peliculaID}</p>
        <p> Titulo Original: {peliculaConID.original_title}</p>
        <p> Descripción: {peliculaConID.overview} </p>
        <p>{peliculaConID.genres.map((genero) => genero.name).join(", ")}</p>
      </div>
    </div>
  );
};

export default PeliculaInfo;
