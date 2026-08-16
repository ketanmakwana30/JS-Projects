export function renderMovies(movies) {
  const movieContainer = document.querySelector("#movieContainer");

  const availableMovies = movies.filter((movie) => {
    return movie.Poster && movie.Poster !== "N/A";
  });

  movieContainer.innerHTML = availableMovies
    .map((movie) => {
      return `
    <article class="movie-card">
      <img src=${movie.Poster} alt=${movie.Title}
      onerror="this.closest('.movie-card').remove()">
      <h2>${movie.Title}</h2>
      <p>Year : ${movie.Year}</p>
      <p>Type : ${movie.Type}</p>
      <button class="details-btn" data-id=' ${movie.imdbID}'>View Details</button>
    </article>
    `;
    })
    .join("");
}
