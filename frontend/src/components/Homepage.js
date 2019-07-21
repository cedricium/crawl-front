import React from 'react';
import '../styles/Homepage.css';
import Navbar from './Navbar';
import ServerCardGrid from './ServerCardGrid';
import _ from 'lodash';

console.log(_.join(['Another', 'module', 'loaded!'], ' '));

// homepage
function Homepage () {
  return (
    <div className="wrapper">
      <Navbar />
      <ServerCardGrid />
    </div>
  );
}

export default Homepage;
