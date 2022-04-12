import React from "react";
import "./css/Movie.css";

class Movie extends React.Component
{
   /*
   * Composant Movie
   * Un film contiendra au moins un titre, une année de sortie, un réalisateur et
   * un synopsis
   */
    render()
    {
        return (
            <article className="Movie">
                <h2>{this.props.title}</h2>
                <time>{this.props.release}</time>
                <p>{this.props.director}</p>
                <p>{this.props.synopsis}</p>
            </article>
        );
    }
}

export default Movie;