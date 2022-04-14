import React from "react";
import "./css/Movie.css";
import Gallery from "./Gallery";

class Movie extends React.Component
{

    constructor(props, context)
    {
        super(props, context);
        this.state = {
            "isShortSynopsis": true
        };
    }

    /*
   * Composant Movie
   * Un film contiendra au moins un titre, une année de sortie, un réalisateur et
   * un synopsis
   */
    render()
    {
        // Put props into variables
        const {posterUrl, title, year, director, synopsis} = this.props;
        const {isShortSynopsis} = this.state;

        return (
            <article className="Movie">
                <Gallery posterUrl={posterUrl} title={title}/>
                <h2>{title}</h2>
                <time>{year}</time>
                <p>{director}</p>
                <p className="synopsis">{isShortSynopsis ? synopsis.substring(0, 50) + '...' : synopsis}</p>
                {
                    isShortSynopsis && <button onClick={this.showMore}>Lire Plus</button>
                }
            </article>
        );
    }

    showMore = () => {
        this.setState({
            "isShortSynopsis": false
        });
    }
}

export default Movie;