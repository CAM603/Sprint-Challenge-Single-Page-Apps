import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Navigation from "./components/Navigation";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";

import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Navigation/>
      <Route exact path="/">
        <Header />
        <WelcomePage/>
      </Route>
      <Route path="/characters">
        <CharacterList/>
      </Route>
      <Route path="/locations">
        <LocationList/>
      </Route>
      <Route path="/episodes">
        <EpisodeList />
      </Route>
    </main>
  );
}
