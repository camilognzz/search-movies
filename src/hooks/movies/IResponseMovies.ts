export interface IResponseMovie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }
  
export  interface RenderResponseMoviesProps {
    Response?: string;
    Error?: string;
    Search?: IResponseMovie[];
  }
