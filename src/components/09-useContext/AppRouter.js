import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { Navbar } from "./Navbar";
import { HomeScren } from "./HomeScren";
import { AboutScreem } from "./AboutScreem";
import { LoginScreen } from "./LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScren} />
            <Route exact path="/about" component={AboutScreem} />
            <Route exact path="/login" component={LoginScreen} />

            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
