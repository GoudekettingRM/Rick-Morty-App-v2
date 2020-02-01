import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="body">
      <header>
        <Header />
      </header>
      <main>The app is going to be here!</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
