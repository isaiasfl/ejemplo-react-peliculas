const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTMwNTcyY2E0NjFkOWI1OGQ4ZjA1ZjcyZDZmNDE5YSIsInN1YiI6IjYxZTliM2RmYTkxMTdmMDA2OTA1YmI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aDDh2PfevyPERXhNeM0xarQMgZg7KZA4m2A0rgqXGUY";
const url = "https://api.themoviedb.org/4/discover/movie";

const getPeliculas = async () => {
  try {
    // info: key Isaias: https://api.themoviedb.org/3/movie/76341?api_key=8930572ca461d9b58d8f05f72d6f419a&language=es
    // Registrarse en https://www.themoviedb.org/
    //
    //https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>&language=es
    //https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=es
    //const idAPI = '8930572ca461d9b58d8f05f72d6f419a';
    //- Version 3 - const url =`https://api.themoviedb.org/3/discover/movie?api_key=${idAPI}&language=es`;
    // --v4-

    // consultamos la api de forma asincrona:
    const respuesta = await fetch(url, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    const resultado = await respuesta.json();
    return resultado.results;
  } catch (error) {
    console.log(error);
  }
};

export default getPeliculas;
