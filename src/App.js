import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';


function App() {
  return (
    <Router>
     <Header></Header>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/book/:bedType">
          
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
