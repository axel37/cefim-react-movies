import React from "react";
import "./css/Gallery.css";

class Gallery extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.posterCount = this.props.posterUrl.length;
        this.state = {
            "currentPoster": 0,
            "animationClass": ""
        }
    }

    /*
    * Composant Gallery
    * Une galerie d'images d'un film
    */
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
        // this.setState({
        //     "currentPoster": (this.state.currentPoster + 1) % this.posterCount
        // });
        // this.setState({
        //     "animationClass": "rotating"
        // });
        // setTimeout(() => {
        //         this.setState({
        //             "animationClass": ""
        //         });
        //     },
        //     500);

        this.setState({"animationClass": "start-rotating"}, () => {
            setTimeout(() => {
                this.setState({"currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount},
                    this.setState({"animationClass": "end-rotating"}, () => {
                        setTimeout(() => {
                            this.setState({"animationClass": ""})
                        }, 200)}))
            }, 200)});
    }

    prevImage = () => {
        // this.setState({"animationClass": "start-rotating-reverse"},
        //     () => {this.setState({"currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount},
        //         () => {this.setState({"animationClass": "end-rotating-reverse"})})});

        this.setState({"animationClass": "start-rotating-reverse"}, () => {
            setTimeout(() => {
                this.setState({"currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount},
                    this.setState({"animationClass": "end-rotating-reverse"}, () => {
                        setTimeout(() => {
                            this.setState({"animationClass": ""})
                        }, 200)}))
            }, 200)});


        //
        // this.setState({
        //     "currentPoster": (this.state.currentPoster + this.posterCount - 1) % this.posterCount
        // });
        // this.setState({
        //     "animationClass": "rotating-reverse"
        // });
        // setTimeout(() => {
        // this.setState({
        //     "animationClass": ""
        // });
        // },
        //     500);
    }
}

export default Gallery;