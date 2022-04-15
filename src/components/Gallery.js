import React from "react";
import "./css/Gallery.css";

/*
* Composant Gallery
* Une galerie d'images d'un film
*/
class Gallery extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.posterCount = this.props.posterUrl.length;
        this.state = {
            "currentPoster": 0,
        }
    }

    render()
    {
        const urls = this.props.posterUrl;
        const title = this.props.title;
        return(
            <>
                <div className="Gallery">
                    {/*{*/}
                    {/*    urls.map(image => <img src={image} alt={"Affiche du film " + title} key={image}/>)*/}
                    {/*}*/}

                    <button onClick={this.prevImage}>{'←'}</button>
                    <img src={urls[this.state.currentPoster]} alt={"Affiche du film " + title} className={this.state.animationClass}/>
                    <button onClick={this.nextImage}>{'→️'}</button>
                </div>
            </>
        );
    }

    nextImage = () => {
        // Tried animating, didn't work well
        // this.setState({"animationClass": "start-rotating"}, () => {
        //     setTimeout(() => {
        //         this.setState({"currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount},
        //             this.setState({"animationClass": "end-rotating"}, () => {
        //                 setTimeout(() => {
        //                     this.setState({"animationClass": ""})
        //                 }, 200)}))
        //     }, 200)});

        this.setState({
            "currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount
        });
    }

    prevImage = () => {
        this.setState({
            "currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount
        });
    }
}

export default Gallery;