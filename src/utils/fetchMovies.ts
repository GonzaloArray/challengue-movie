export const fetchMovies = async (query: string = '') => {
  try {
    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=733b7f2dfae5b323c1e4852ece8c9fca&language=en-US&query=${query}&page=1&include_adult=false`)
    const data = await resp.json()
    return data as Movies
  } catch (error) {
    console.log(error)
  }
}
