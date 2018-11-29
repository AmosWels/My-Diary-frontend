import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../components/auth";
import Signup from "../components/auth/signup";
import ProtectedRoute from "./protectedRoutes";
import ViewDiaries from "../components/entries/viewEntries";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact strict path={"/"} component={Index} />
      <Route exact strict path={"/auth/signup"} component={Signup} />
      <ProtectedRoute path="/entries" component={ViewDiaries} exact strict/>
    </Switch>
  </Router>
);
