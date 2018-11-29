import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../components/auth";
import Signup from "../components/auth/signup";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact strict path={"/"} component={Index} />
      <Route exact strict path={"/auth/signup"} component={Signup} />
    </Switch>
  </Router>
);
