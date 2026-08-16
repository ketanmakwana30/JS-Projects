import { BASE_URL, API_KEY } from "./config.js";

export async function searchMovie(query) {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Internet Connection Weak!");
  }

  const data = await response.json();

  if (data.response === "False") {
    throw new Error(data.Error);
  }
  return data;
}
