import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Users from "./Users.jsx";
import Home from "./Home.jsx";

class App extends Component {
  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users" component={Users} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
