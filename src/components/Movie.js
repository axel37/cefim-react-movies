import React from "react";
import "./css/Movie.css";
import Gallery from "./Gallery";

/*
    Movie component
    Holds information about a movie, along with a poster Gallery (carousel)
    Can be added to favourites and temporarily deleted
 */
class Movie extends React.Component
{

    constructor(props, context)
    {
        super(props, context);
        this.state = {
            "isVisible": true,
            "isShortSynopsis": true,
            "isFavourite": localStorage.getItem(this.props.title + this.props.year)
        };
    }

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
                    <input type="checkbox" onChange={this.setFavourite} checked={isFavourite}></input>
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

    /*
        Show the full synopsis
        By default, they are truncated
     */
    showMore = () => {
        this.setState({
            "isShortSynopsis": false
        });
    }

    /*
        Sets a movie as a favourite.
        Favourited movies cannot be removed
     */
    setFavourite = evt => {
        const checked = evt.target.checked;

        this.setState({
            "isFavourite": checked
        }, () => localStorage.setItem(this.props.title + this.props.year, checked));
    }

    /*
        (temporarily) Remove movie from the list.
     */
    removeMovie = () => {
        this.setState({
            "isVisible": false
        });
    }
}

export default Movie;