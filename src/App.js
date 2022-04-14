import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./data/movieData";

class App extends React.Component {
    render()
    {
        return (
            <div className="App">
                <Header/>
                <main>
                    {
                        // {...m} : Takes key-value pairs from object 'm' and assigns them as props to the movie element
                        // Said props are given the name of the key
                        movies.map(m => <Movie {...m} key={m.title + m.year}
                        // This is an automated way to do the following :
                            /*
                            posterUrl={m.posterUrl}
                            title={m.title}
                            year={m.year}
                            director={m.director}
                            synopsis={m.synopsis}
                             */
                        />)
                    }
                </main>
            </div>
        );
    }
}

export default App;