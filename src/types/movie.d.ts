interface Movie {
  id: number
  title: string
  poster_path: string
}

interface Movies {
  page: number
  results: Movie[]
}
