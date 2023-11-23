import { useState, useEffect } from 'react'
import './App.scss'
import SearchMovies from './components/SearchMovies/SearchMovies'
import DisplayMovies from './components/DisplayMovies/DisplayMovies'
import { getMovies } from './api/api'

function App() {
  const [searchResult, setSearchResult] = useState([])
  console.log(searchResult)
  useEffect(() => {
    updateSearchResult('Emma')
  }, [])

  async function updateSearchResult(searchTerm) {
    const fromApi = await getMovies(searchTerm)
    if (Number(fromApi.totalResults)) {
      setSearchResult([...fromApi.Search])
    }
  }

  return (
    <main>
      <SearchMovies updateSearchResult={updateSearchResult} />
      <DisplayMovies searchResult={searchResult} />
    </main>
  )
}

export default App
