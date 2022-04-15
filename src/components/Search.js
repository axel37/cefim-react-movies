import React from "react";
import "./css/Search.css";

/*
    Component : Search
    Three search inputs (title, year and director)
    All input call the callback function provided as a prop
 */
class Search extends React.Component
{
    render()
    {
        return (
            <div className="Search">
                <input type="text" id="filterTitle" placeholder="Title..." onChange={this.props.onChangeCallback}/>
                <input type="number" id="filterYear" placeholder="Year..." min="0" onChange={this.props.onChangeCallback}/>
                <input type="text" id="filterDirector" placeholder="Director..." onChange={this.props.onChangeCallback}/>
            </div>
        );
    }
}

export default Search;