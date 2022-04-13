import React from "react";
import "./css/Movie.css";
import Gallery from "./Gallery";

class Movie extends React.Component
{
   /*
   * Composant Movie
   * Un film contiendra au moins un titre, une année de sortie, un réalisateur et
   * un synopsis
   */
    render()
    {
        // Put props into variables
        const {posterUrl, title, year, director, synopsis} = this.props;

        return (
            <article className="Movie">
                <Gallery posterUrl={posterUrl} title={title}/>
                <h2>{title}</h2>
                <time>{year}</time>
                <p>{director}</p>
                <p>{synopsis}</p>
            </article>
        );
    }
}

export default Movie;