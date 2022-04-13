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
                        movies.map(m => <Movie
                            img={m.posterUrl}
                            title={m.title}
                            release={m.year}
                            director={m.director}
                            synopsis={m.synopsis}
                        />)
                    }
                </main>
            </div>
        );
    }
}

export default App;