import './App.css'

function App() {
  return (
    <div>
      <h1>Prueba Técnica</h1>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Results
      </main>
    </div>
  )
}

export default App
