import "./App.css";
import { PeliculasPlantilla } from "./components/PeliculasPlantilla";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import PeliculaInfo from "./pages/PeliculaInfo";
// NOTA: Routes es el antiguo BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <NavLink to="/">
        <h1 className="title">Información de Películas</h1>
      </NavLink>

      <Routes>
        <Route exact path="/" element={<PeliculasPlantilla />} />
        <Route path="/peliculas/:peliculaID" element={<PeliculaInfo />} />
        <Route exact path="about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
