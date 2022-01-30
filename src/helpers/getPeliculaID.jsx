const getPeliculaID = async (peliculaID) => {
  // info: key Isaias: https://api.themoviedb.org/3/movie/76341?api_key=8930572ca461d9b58d8f05f72d6f419a&language=es
  // Registrarse en https://www.themoviedb.org/
  //
  //https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=es
  //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=es
  const idAPI = "8930572ca461d9b58d8f05f72d6f419a";
  const url = `https://api.themoviedb.org/3/movie/${peliculaID}?api_key=${idAPI}&language=es-ES`;
  // --v4-
  //const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwNTcyY2E0NjFkOWI1OGQ4ZjA1ZjcyZDZmNDE5YSIsInN1YiI6IjYxZTliM2RmYTkxMTdmMDA2OTA1YmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aDDh2PfevyPERXhNeM0xarQMgZg7KZA4m2A0rgqXGUY";
  // no me funciona const url = `https://api.themoviedb.org/4/list/${params.peliculaID}`;

  // consultamos la api de forma asincrona:
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado;
};

export default getPeliculaID;
