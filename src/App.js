import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact />
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
