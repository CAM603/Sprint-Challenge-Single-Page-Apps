import React from "react";

// Components
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import Navigation from "./components/Navigation";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import Character from "./components/Character";
import Location from "./components/Location";

import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Navigation/>
      <Route exact path="/">
        <Header />
        <WelcomePage/>
      </Route>
      <Route exact path="/characters">
        <CharacterList/>
      </Route>
      <Route path="/characters/:id">
        <Character/>
      </Route>
      <Route exact path="/locations">
        <LocationList/>
      </Route>
      <Route path="/locations/:id">
        <Location/>
      </Route>
      <Route path="/episodes">
        <EpisodeList />
      </Route>
    </main>
  );
}
