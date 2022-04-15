import React from "react";
import "./css/Search.css";

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