import { useEffect, useState } from 'react';
import './App.css';
import { NoRenderResults, RenderMovies } from './components/movies/Movies';
import { useMovies } from './hooks/useMovies';


function App() {
  const { movies } = useMovies();
  const hasMovies = movies?.length > 0;
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ query });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value)
  }

  useEffect(() => {
    if (query == '') {
      setError('No se puede buscar una película vacía');
      return
    }
    if(query.match(/°\d+$/)){
      setError('No se puede buscar una película con número');
      return
    }
    if(query.length < 3){
      setError('La búsqueda debe tener al menos 3 caracteres');
      return
    }
    setError(null);
  }, [query])

  return (
    <div className='page'>
      <h1>Prueba Técnica</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
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
