import React from "react";
import "./css/Movie.css";
import Gallery from "./Gallery";

/*
    Component : Movie
    Holds information about a movie, along with a poster Gallery (carousel)
    Can be added to favorites and temporarily deleted
 */
class Movie extends React.Component
{

    constructor(props, context)
    {
        super(props, context);
        this.state = {
            "isVisible": true,
            "isShortSynopsis": true,
            "isfavorite": localStorage.getItem(this.props.title + this.props.year)
        };
    }

    render()
    {
        if (this.state.isVisible)
        {
        // Put props into variables
        const {posterUrl, title, year, director, synopsis} = this.props;
        const {isShortSynopsis, isfavorite} = this.state;

        return (
            <article className={isfavorite ? "Movie favorite" : "Movie"}>
                <Gallery posterUrl={posterUrl} title={title}/>
                <label>Favorite
                    <input type="checkbox" onChange={this.setfavorite} checked={isfavorite}/>
                </label>
                <h2>{title}</h2>
                <time>{year}</time>
                <p>{director}</p>
                <p className="synopsis">{isShortSynopsis ? synopsis.substring(0, 50) + '...' : synopsis}</p>
                {
                    isShortSynopsis && <button onClick={this.showMore}>Read More</button>
                }
                {
                    !isfavorite && <button className="remove" onClick={this.removeMovie}>Remove Movie</button>
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
        Sets a movie as a favorite.
        favorited movies cannot be removed
     */
    setfavorite = evt => {
        const checked = evt.target.checked;

        this.setState({
            "isfavorite": checked
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