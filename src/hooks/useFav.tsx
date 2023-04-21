import { useEffect, useState } from 'react'

interface Props {
  fav: Movie[]
  onAddFav: (movie: Movie) => void
  removeMovie: (movie: Movie) => void
}

export const useFav = (): Props => {
  const [fav, setFav] = useState<Movie[]>(() => {
    const storedFav = localStorage.getItem('fav')
    if (storedFav !== null) {
      return JSON.parse(storedFav)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav])

  const onAddFav = (movie: Movie) => {
    setFav(() => {
      const data = fav.find(f => f.id === movie.id)
      if (data === undefined) {
        return [...fav, movie]
      } else {
        return fav
      }
    })
  }

  const removeMovie = (movie: Movie) => {
    const data = fav.filter(mov => mov.id !== movie.id)

    setFav(data)
  }

  return {
    fav,
    onAddFav,
    removeMovie
  }
}
