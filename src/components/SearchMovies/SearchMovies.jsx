import "./SearchMovies.scss";

export default function SearchMovies({ updateSearchResult }) {

  return (
    <header>
      <h1>Movie Search App</h1>
      <section>
        <input type="text" placeholder="Search Movie..." onChange={(event) => updateSearchResult(event.target.value)} />
      </section>
    </header>
  );
}
