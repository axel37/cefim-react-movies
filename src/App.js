import React from "react";
import './App.css';
import Header from "./components/Header";

class App extends React.Component {
    render()
    {
        return (
            <div className="App">
                <Header/>
                <main>
                    Hello world (en react)
                </main>
            </div>
        );
    }
}

export default App;