import "./DisplayMovies.scss"
import MovieCard from "../MovieCard/MovieCard"

export default function DisplayMovies({searchResult}) {

    return (
        <section className="display-movies">
            { searchResult.length > 0 ? searchResult.map(movie => <MovieCard key={movie.imdbID} movie={movie} />) : <p>No movies found</p>}
        </section>
    )
}