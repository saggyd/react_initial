import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './component/menu/menu';
import home from './component/home/home';
import about from './component/about/about';
import contact from './component/contact/contact';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="container">
            <Menu />
            <Route exact path="/" component={home} />
            <Route path="/about" component={about} />
            <Route path="/contact" component={contact} />
          </div>          
        </div>
      </Router>
    );
  }
}

export default App;
