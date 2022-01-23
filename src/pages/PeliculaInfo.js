import React, { useEffect, useState } from 'react';
import estilo from "./PeliculaInfo.module.css";
import { useParams } from 'react-router-dom';
const PeliculaInfo = (props) => {
    const urlImagen="https://image.tmdb.org/t/p/w500";
    //capturo el parámetro desde <Route path="/peliculas/:peliculaID" en App.js
    const params = useParams();

    const [peliculaConID,setPeliculaConID] = useState([]);
  
    useEffect(()=> {
        const consultarAPI = async () => {
            // info: key Isaias: https://api.themoviedb.org/3/movie/76341?api_key=8930572ca461d9b58d8f05f72d6f419a&language=es
            // Registrarse en https://www.themoviedb.org/
            //
            //https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=es
            //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=es
            const idAPI = '8930572ca461d9b58d8f05f72d6f419a';
            const url =`https://api.themoviedb.org/3/movie/${params.peliculaID}?api_key=${idAPI}&language=es`;
            // --v4-
            //const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwNTcyY2E0NjFkOWI1OGQ4ZjA1ZjcyZDZmNDE5YSIsInN1YiI6IjYxZTliM2RmYTkxMTdmMDA2OTA1YmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aDDh2PfevyPERXhNeM0xarQMgZg7KZA4m2A0rgqXGUY";
            // no me funciona const url = `https://api.themoviedb.org/4/list/${params.peliculaID}`;
    
            // consultamos la api de forma asincrona:
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setPeliculaConID(resultado); 
                          
        }
        consultarAPI(); 
              
    },[]); 
    console.log(peliculaConID)
    const urlImagenInfo="https://image.tmdb.org/t/p/w500"+peliculaConID.poster_path;
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
                <p>ID: {params.peliculaID}</p>
                <p> Titulo Original: {peliculaConID.original_title}</p>
                <p> Descripción: {peliculaConID.overview} </p>
            </div>
        </div>
    );

};

export default PeliculaInfo;