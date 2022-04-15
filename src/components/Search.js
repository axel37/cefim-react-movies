import React from "react";
import "./css/Search.css";

/*
    Search component
    Three search inputs (title, year and director)
    All input call the callback function provided as a prop
 */
class Search extends React.Component
{
    render()
    {
        return (
            <div className="Search">
                <input type="text" id="filterTitle" placeholder="Titre..." onChange={this.props.onChangeCallback}></input>
                <input type="number" id="filterYear" placeholder="Année..." min="0" onChange={this.props.onChangeCallback}></input>
                <input type="text" id="filterDirector" placeholder="Réalisateur..." onChange={this.props.onChangeCallback}></input>
            </div>
        );
    }
}

export default Search;