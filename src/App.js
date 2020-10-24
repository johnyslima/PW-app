import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Auth'
import About from './pages/about'

function App() {
  return (
    <div>
      <Switch>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact/:id">
          {/* <Contact /> */}
        </Route>
        
        <Route path="/contact">
          {/* <AllContacts /> */}
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
