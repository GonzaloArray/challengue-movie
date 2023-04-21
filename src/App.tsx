import { type FormEvent } from 'react'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'
import { useSearch } from './hooks/useSearch'
import { useFav } from './hooks/useFav'

export const App = () => {
  const { movies, getMovies } = useMovie()
  const { search, alert, onInputChange } = useSearch()
  const { fav, onAddFav, removeMovie } = useFav()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    void getMovies(search)
  }

  const handleClick = (movie: Movie) => {
    onAddFav(movie)
  }
  const handleDeleteFav = (movie: Movie) => {
    removeMovie(movie)
  }

  return (
    <div className='flex__center'>
      <form className='form' onSubmit={handleSubmit}>
        <input
          name='search'
          className="search"
          type="text"
          placeholder="enviar"
          onChange={(e) => { onInputChange(e.target.value) }}
        />
        {alert}
      </form>

      <Movies onClick={handleClick} movies={movies !== null ? movies : []} status='movie' />
      <Movies onClick={handleDeleteFav} movies={fav} status='fav' />
    </div>
  )
}
