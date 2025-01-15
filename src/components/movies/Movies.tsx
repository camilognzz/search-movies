import React from "react"
import { RenderMoviesProps } from "./interfaceMovie/IMovie"

export const RenderMovies: React.FC<RenderMoviesProps> = ({ movies }) => {
    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export const NoRenderResults = () => {
    return (
        <p>No se encontraron películas para esta búsqueda</p>
    )
}