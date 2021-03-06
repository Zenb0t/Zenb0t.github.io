import React, { Component } from 'react';
import './custom.scss';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Explore from "./components/webprojects/Explore";
import Front from "./components/front/Front"
import Stack from './components/Stack';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Website from './components/webprojects/Webprojects';
import UXSection from './components/ux/UXSection';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/front">
              <Front />
            </Route>
            <Route path="/stack">
              <Stack />
            </Route>
            <Route path="/webprojects">
              <Website />
            </Route>
            <Route path="/esss">
              <UXSection />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
