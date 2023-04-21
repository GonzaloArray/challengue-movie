import { useCallback, useState } from 'react'
import { fetchMovies } from '../utils/fetchMovies'

export const useMovie = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null)

  const [, setError] = useState(null)

  const getMovies = useCallback(async (search: string) => {
    try {
      setError(null)

      const newMovies = await fetchMovies(search)

      if (newMovies != null) {
        setMovies(newMovies.results)
      }
    } catch (error) {
      console.log(error)
    }
  }, [])
  return {
    movies,
    getMovies
  }
}
