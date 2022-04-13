import React from "react";
import "./css/Gallery.css";

class Gallery extends React.Component
{
    /*
    * Composant Gallery
    * Une galerie d'images d'un film
    */
    render()
    {
        const urls = this.props.posterUrl;
        const title = this.props.title;
        return(
            <div className="Gallery">
                {
                    urls.map(image => <img src={image} alt={"Affiche du film " + title}/>)
                }
            </div>
        );
    }
}

export default Gallery;