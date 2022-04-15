import React from "react";
import "./css/Header.css";
import logo from "../logo.svg"

class Header extends React.Component
{
    render()
    {
        return (
            <header className="Header">
                <h1>Movies / React</h1>
                <img src={logo} className="App-logo" alt="React logo"/>
            </header>
        );
    }
}

export default Header;