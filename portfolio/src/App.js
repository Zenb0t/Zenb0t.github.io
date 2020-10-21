import React, { Component } from 'react';
import './custom.scss';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
        
      </div>
      </Router>
    );
  }
}


export default App;
