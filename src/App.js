import './App.css';
import { PeliculasPlantilla } from './components/PeliculasPlantilla';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./components/About";
import PeliculaInfo from './pages/PeliculaInfo';
// NOTA: Routes es el antiguo BrowserRouter
function App() {
  return (
    <>
      <header>
        <NavLink to="/">
          <h1 className="title">Información de Películas</h1>
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/peliculas/:peliculaID" element={<PeliculaInfo/>}/>
          <Route exact path="about" element={<About />} />
          <Route exact path="/" element={<PeliculasPlantilla/>} />
        </Routes>  
      </main>
    </>  
  );
}

export default App;
