import './App.css';

import { NoRenderResults, RenderMovies } from './components/movies/Movies';
import { useMovies } from './hooks/useMovies';


function App() {
  
  const { movies } = useMovies();
  
  return (
    <div className='page'>
      <h1>Prueba Técnica</h1>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        {
          hasMovies ?
            (
              <RenderMovies movies={movies} />
            )
            : (
              <NoRenderResults />
            )
        }
      </main>
    </div >
  )
}

export default App
