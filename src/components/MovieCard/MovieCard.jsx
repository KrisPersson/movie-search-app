import "./MovieCard.scss"

function truncate(str) {
    if (str.length > 30) {
      return str.slice(0, 29) + "...";
    } else {
      return str;
    }
  }

export default function MovieCard({movie}) {

    return (
        <article role='movie-item' className="movie-card">
            <img src={movie.Poster} alt="No image" />
            <section>
                <h3>{truncate(movie.Title)}</h3>
                <p className='movie-card__year'>({movie.Year})</p>
                <p>imdbID: {movie.imdbID}</p>
            </section>
        </article>
    )
}