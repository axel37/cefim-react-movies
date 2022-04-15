import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";

import movies from "./data/movieData";
import Search from "./components/Search";
import Filters from "./components/Filters";

class App extends React.Component {
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            "filterTitle": "",
            "filterYear": "",
            "filterDirector": "",
            "sortByTitle": false,
            "sortByYear": false,
            "sortByDirector": false
        }
    }

    render()
    {
        const {filterTitle, filterYear, filterDirector} = this.state;

        const moviesToDisplay = movies
            .filter(movie => movie.title.toLowerCase().includes(filterTitle))
            .filter(movie => String(movie.year).toLowerCase().startsWith(filterYear))
            .filter(movie => movie.director.toLowerCase().includes(filterDirector));

        if (this.state.sortByTitle)
        {
            moviesToDisplay.sort((m1, m2) => m1.title.localeCompare(m2.title))
        }
        if (this.state.sortByYear)
        {
            moviesToDisplay.sort((m1, m2) => m2.year - m1.year)
        }
        if (this.state.sortByDirector)
        {
            moviesToDisplay.sort((m1, m2) => m1.director.localeCompare(m2.director))
        }

        return (
            <div className="App">
                <Header/>
                <Search onChangeCallback={this.filterMovies}/>
                <Filters onChangeCallback={this.sortMovies}/>

                <main>
                    {
                        // {...m} : Takes key-value pairs from object 'm' and assigns them as props to the movie element
                        // Said props are given the name of the key
                        moviesToDisplay.map(m => <Movie {...m} key={m.title + m.year}/>)
                    }
                </main>
            </div>
        );
    }

    filterMovies = evt => {
        const filterType = evt.target.id;

        if (filterType === "filterTitle")
        {
            this.setState({"filterTitle": evt.target.value.toLowerCase()});
        }
        else if (filterType === "filterYear")
        {
            this.setState({"filterYear": String(evt.target.value)});
        }
        else if (filterType === "filterDirector")
        {
            this.setState({"filterDirector": evt.target.value.toLowerCase()});
        }
    }

    sortMovies = evt => {
        const sortType = evt.target.id;
        const checked = evt.target.checked;

        console.log(sortType + " : " + checked);

        if (sortType === "sortByTitle")
        {
            this.setState({"sortByTitle": checked});
        }
        else if (sortType === "sortByYear")
        {
            this.setState({"sortByYear": checked});
        }
        else if (sortType === "sortByDirector")
        {
            this.setState({"sortByDirector": checked});
        }
    }
}

export default App;