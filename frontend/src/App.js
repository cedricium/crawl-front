import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Route, HashRouter } from "react-router-dom";
import Home from './components/Homepage';
import All from './components/All';
import './styles/Globals.css';

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/all" component={All}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
