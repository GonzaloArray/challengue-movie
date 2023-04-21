interface Props {
  movies: Movie[]
  onClick: (movies: Movie) => void
  status: string
}
export const Movies: React.FC<Props> = ({ movies, onClick, status }: Props) => {
  return (
    <>
      <h2 style={{ marginBottom: '2rem', backgroundColor: 'blue', padding: '2rem' }}>
        {status === 'movie' ? 'Tus mejores Peliculas' : 'Tus Favoritos'}
      </h2>
      <div className='grid__movies'>
        {
          movies?.map((movie: Movie) => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="" />
              <h2>{movie.title}</h2>
              <button type="button" onClick={() => {
                onClick({
                  id: movie.id,
                  title: movie.title,
                  poster_path: movie.poster_path
                })
              }}>{status === 'movie' ? 'Fav' : 'Delete'}</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
