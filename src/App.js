import React from "react";
import './App.css';
import Header from "./components/Header";
import Movie from "./components/Movie";

class App extends React.Component {
    render()
    {
        return (
            <div className="App">
                <Header/>
                <main>
                    <Movie title="Un film" release="Novembre 2025" director="Jean Pierre"
                           synopsis="C'est un film tellement bien qu'en parler ne ferait que le gâcher"/>
                    <Movie title="Un autre film" release="Janvier 1678" director="Jean Marc"
                           synopsis="Un film super mais les effets spéciaux montrent leur âge"/>
                    <Movie title="Encore un film" release="Septembre 2019" director="Jean Paul"
                           synopsis="Ce film là, alors je vous le dis, il est très très bien !
                           Je pourrais en parler pendant des heures. J'ai adoré.
                           Je ne regrette absolument pas d'avoir dépensé mon argent dûrement gagné
                           pour acheter la place de cinéma qui m'a permis de découvrir cette merveille !"/>
                </main>
            </div>
        );
    }
}

export default App;