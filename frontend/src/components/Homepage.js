import React, { Component } from 'react';
import '../styles/Homepage.css';
import Header from './Header';
import ServerCardGrid from './ServerCardGrid';

// main class
class Homepage extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="wrapper">
      <Header /> 
      <ServerCardGrid />
    </div>
  );}
}
  
export default Homepage 