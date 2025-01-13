export interface IMovie {
    id: string;
    title: string;
    year: string;
    poster: string;
  }

  
export interface RenderMoviesProps {
  movies: IMovie[];
}
