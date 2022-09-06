function Movie({medium_cover_image, title, summary, genres}) {
  return (
    <div>
      <div>
        <img src={medium_cover_image} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => (
          <li key={genre}>{genre}</li>
          ))}
          </ul>
        </div>
    </div>
  )
} 

export default Movie;