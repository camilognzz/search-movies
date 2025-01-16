import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../../services/movies";
import { RenderResponseMoviesProps } from "./IResponseMovies";

export function useMovies({ search, sort }: { search: string }) {
  const [movies, setMovies] = useState<RenderResponseMoviesProps>({
    Search: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  const previesSearch = useRef(search);

  const getMovies = async () => {
    if (search == previesSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previesSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);
  return { movies: sortedMovies, getMovies, loading };
}
