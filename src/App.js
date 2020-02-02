import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SearchResultsPage from "./components/SearchResults/SearchResultsPage";
import CharactersList from "./components/RickMortyDataPage/CharactersList";
import EpisodeList from "./components/RickMortyDataPage/EpisodeList";
import LocationList from "./components/RickMortyDataPage/LocationList";

function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/search" exact component={SearchResultsPage} />
          <Route path="/characters" exact component={CharactersList} />
          <Route path="/episodes" exact component={EpisodeList} />
          <Route path="/locations" exact component={LocationList} />
          <Route path="/contact" exact />
          <Route path="/support" exact />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
