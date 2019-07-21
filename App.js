import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
