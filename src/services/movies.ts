import { IResponseMovie } from "../hooks/movies/IResponseMovies";

const APIKEY = "4287ad07";
export const searchMovies = async ({ search }: { search: string }) => {
  if (search == "") return null;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${APIKEY}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie: IResponseMovie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch{
    throw new Error("Error searching movies");
  }
};
