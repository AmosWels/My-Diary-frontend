import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./components/auth/index";
import Signup from "./components/auth/signup";
import ViewDiaries from "./components/diaryEntries/viewEntries";
import PageNotfound from "./components/auth/pageNotfound";

export const baseurl = "https://mydiario3.herokuapp.com";
const Routes = () =>(
  <Router>
    <Switch>
      <Route exact strict path = {"/"} component = {Index}/>
      <Route exact strict path = {"/auth/signup"} component = {Signup}/>
      <Route exact strict path = {"/user/entries"} component = {ViewDiaries}/>
      <Route component = {PageNotfound}/>
    </Switch>
  </Router>
);
class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
      </div>
    );
  }
}

export default App;
