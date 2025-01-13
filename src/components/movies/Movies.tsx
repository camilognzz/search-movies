import React from "react"
import { RenderMoviesProps } from "./interfaceMovie/IRenderMoviesProps"

export const RenderMovies: React.FC<RenderMoviesProps> = ({ movies }) => {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
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