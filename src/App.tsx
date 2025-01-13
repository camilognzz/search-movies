import './App.css';
import responseMovies from './mocks/with-resuts.json'
import withoutResults from './mocks/no-results.json'
import { NoRenderResults, RenderMovies } from './components/movies/Movies';

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

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
