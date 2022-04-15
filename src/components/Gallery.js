import React, {createRef} from "react";
import "./css/Gallery.css";

/*
    Component : Gallery
    Movie poster carousel
*/
class Gallery extends React.Component
{
    imageRef; // Holds the ref to the img element (movie poster)

    constructor(props, context)
    {
        super(props, context);
        this.posterCount = this.props.posterUrl.length;
        this.state = {
            "currentPoster": 0,
        }
        this.imageRef = createRef();
    }

    render()
    {
        const urls = this.props.posterUrl;
        const title = this.props.title;

        return(
            <>
                <div className="Gallery">
                    {/*{*/}
                    {/*    urls.map(image => <img src={image} alt={"Poster for the movie : " + title} key={image}/>)*/}
                    {/*}*/}

                    <button onClick={this.prevImage}>{'←'}</button>
                    <img ref={this.imageRef} src={urls[this.state.currentPoster]} alt={"Poster for the movie : " + title} className={this.state.animationClass}/>
                    <button onClick={this.nextImage}>{'→️'}</button>
                </div>
            </>
        );
    }

    // On "next" button pressed
    nextImage = () => {
        this.setImage((this.state.currentPoster + 1) % this.posterCount);
    }

    // On "previous" button checked
    prevImage = () => {
        this.setImage((this.state.currentPoster + this.posterCount - 1) % this.posterCount)
    }

    /*
        Changes the displayed image
        Fades it out, changes the src, then fades it in
        WARNING : Does not wait for image to be loaded before fading it back in. Jarring on slower connections.
     */
    setImage = newImage => {
        this.imageFadeOut(
            () => {
                this.setState({
                    "currentPoster": newImage
                }, () => {
                    this.imageFadeIn()
                });
            }
        );
    }

    /*
        Fade out animation.
        Calls callback when animation is done.
     */
    imageFadeOut = callback => {
        const imageFade = new KeyframeEffect(
            this.imageRef.current,
            [
                {opacity: 100},
                {opacity: 0}
            ],
            {duration: 300, fill: "forwards"}
        );

        const fadeAnimation = new Animation(imageFade, document.timeline);

        fadeAnimation.addEventListener("finish", callback)
        fadeAnimation.play();
    }

    /*
        Fade in animation.
        Calls callback when animation is done.
     */
    imageFadeIn = callback =>
    {
        const imageFade = new KeyframeEffect(
            this.imageRef.current,
            [
                {opacity: 0},
                {opacity: 100}
            ],
            {duration: 300, fill: "forwards"}
        );

        const fadeAnimation = new Animation(imageFade, document.timeline);

        fadeAnimation.addEventListener("finish", callback)
        fadeAnimation.play()
    }
}

export default Gallery;