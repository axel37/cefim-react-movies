import React from "react";
import "./css/Header.css";

class Header extends React.Component
{
    render()
    {
        return (
            <header className="Header">
                <h1>Mes films préférés</h1>
            </header>
        );
    }
}

export default Header;