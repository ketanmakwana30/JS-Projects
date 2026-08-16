import { searchMovie } from "./api.js";
import { renderMovies } from "./ui.js";

const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    console.log("Please enter a movie name");
    return;
  }

  try {
    const data = await searchMovie(query);

    renderMovies(data.Search);
  } catch (error) {
    console.error(error.message);
  }
});
