import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { NoRenderResults, RenderMovies } from './components/movies/Movies';
import { useMovies } from './hooks/movies/useMovies';
import debounce from 'just-debounce-it';


const useSearch = () => {
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<null>(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search == '';
      return
    }

    if (search == '') {
      setError('No se puede buscar una película vacía');
      return
    }

    if (search.match(/°\d+$/)) {
      setError('No se puede buscar una película con número');
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres');
      return
    }
    setError(null);
  }, [search])

  return { search, setSearch, error }
}


function App() {
  const [sort, setSort] = useState<boolean>(false);
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });
  const hasMovies = movies?.length > 0;

  const debouncedGetMovies = useCallback(
    debounce(({ search }:string) => {
      console.log('search', search);
      getMovies({ search });
    }, 300)
    , [getMovies])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies({ search });
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch)
    debouncedGetMovies(newSearch);
  }


  return (
    <div className='page'>
      <h1>Prueba Técnica</h1>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando</p>
            :
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
