import React from "react";
import "./css/Filters.css";

/*
    SortButtons component
    Three checkboxes
    All checkboxes call the callback function provided as a prop.
 */
class SortButtons extends React.Component
{
    render()
    {
        return (
            <div className="Filters">
                <label htmlFor="sortByTitle">Sort by Title
                    <input type="checkbox" id="sortByTitle" onChange={this.props.onChangeCallback}></input>
                </label>
                <label htmlFor="sortByYear">Sort by Year
                    <input type="checkbox" id="sortByYear" onChange={this.props.onChangeCallback}></input>
                </label>
                <label htmlFor="sortByDirector">Sort by Director
                    <input type="checkbox" id="sortByDirector" onChange={this.props.onChangeCallback}></input>
                </label>
            </div>
        );
    }
}

export default SortButtons;