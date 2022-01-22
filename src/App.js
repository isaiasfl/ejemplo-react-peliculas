import './App.css';
import { PeliculasPlantilla } from './components/PeliculasPlantilla';

function App() {
  return (
    <>
      <header>
        <h1 className="title">Información Películas</h1>
      </header>
      <main>
        <PeliculasPlantilla/>
      </main>
    </>
  );
}

export default App;
