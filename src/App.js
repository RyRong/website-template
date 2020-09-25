import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import gameIDs from "./components/pages/gameID";
import aboutMe from "./components/pages/AboutMe";
import resume from "./components/pages/Resume";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gameIDs" component={gameIDs} />
          <Route path="/aboutMe" component={aboutMe} />
          <Route path="/resume" component={resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
