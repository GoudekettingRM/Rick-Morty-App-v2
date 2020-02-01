import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Search from "../Search/Search";

export default function Home(props) {
  return (
    <div className="welcomePage">
      <h4 className="pageTitle">
        Welcome to this Rick and Morty interactive database!
      </h4>
      <img
        className="welcomePageImg"
        alt="Open your eyes, Morty!"
        src="https://i.pinimg.com/474x/78/84/1e/78841ebe0e2d748ed2f3e6d88ea5bf6f--rick-y-morty-rick-and-morty-art.jpg"
      />
      <p>You can look at the following Rick and Morty data:</p>
      <ul className="informationList">
        <li>
          <Link to="/characters">characters</Link>
        </li>
        <li>
          <Link to="/episodes">episodes</Link>
        </li>
        <li>
          <Link to="/dimensions">known dimensions</Link>
        </li>
      </ul>
      <Search />
    </div>
  );
}
