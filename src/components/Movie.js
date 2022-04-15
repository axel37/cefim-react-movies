import React from "react";
import "./css/Movie.css";
import Gallery from "./Gallery";

class Movie extends React.Component
{

    constructor(props, context)
    {
        super(props, context);
        this.state = {
            "isVisible": true,
            "isShortSynopsis": true,
            "isFavourite": false
        };
    }

    /*
   * Composant Movie
   * Un film contiendra au moins un titre, une année de sortie, un réalisateur et
   * un synopsis
   */
    render()
    {
        if (this.state.isVisible)
        {
        // Put props into variables
        const {posterUrl, title, year, director, synopsis} = this.props;
        const {isShortSynopsis, isFavourite} = this.state;

        return (
            <article className={isFavourite ? "Movie favourite" : "Movie"}>
                <Gallery posterUrl={posterUrl} title={title}/>
                <label>Favoris
                    <input type="checkbox" onChange={this.setFavourite}></input>
                </label>
                <h2>{title}</h2>
                <time>{year}</time>
                <p>{director}</p>
                <p className="synopsis">{isShortSynopsis ? synopsis.substring(0, 50) + '...' : synopsis}</p>
                {
                    isShortSynopsis && <button onClick={this.showMore}>Lire Plus</button>
                }
                {
                    !isFavourite && <button className="supprimer" onClick={this.removeMovie}>Supprimer le film</button>
                }
            </article>
        );
        }
    }

    showMore = () => {
        this.setState({
            "isShortSynopsis": false
        });
    }

    setFavourite = evt => {
        const checked = evt.target.checked;

        this.setState({
            "isFavourite": checked
        });
    }

    removeMovie = () => {
        this.setState({
            "isVisible": false
        });
    }
}

export default Movie;