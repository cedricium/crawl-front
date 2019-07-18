import { Link } from "react-router-dom";
import "../styles/header.css";
import styled from 'styled-components';
import React, { Component } from "react";

// Add spacing in between navbar and content
const ShiftDown = styled.div`margin-bottom: 10vw;`;

class Header extends Component {
  state = {
    menuClass: "header-menu",
    status: "Offline"   // todo: send REQUEST to backend to check for status state
  };
  constructor() {
    super();
    this.dropdown = this.dropdown.bind(this);
    this.state = {
      menuClass: "header-menu",
      status: "Offline"
    };
  }

  // handler for the responsive menu dropdown
  dropdown() {
    if (this.state.menuClass == "header-menu")
      this.setState({ menuClass: "header-menu responsive" });
    else {
      this.setState({ menuClass: "header-menu" });
    }
  }
 
  render() {
    return (
      <div>

    
      <ShiftDown>
        <div className="header">
          <div className="stretcher">
          <div className="navitem logo">
            <Link to="/" className="navitem logo-link">
              <img
                className="navitem logo-diamond"
                src="https://vignette.wikia.nocookie.net/spartaremix/images/e/ec/Discord-new-logo.png/revision/latest?cb=20180224071554"
              />
              <h1 className="navitem logo-name">DiscordCrawler</h1>
            </Link>
            <div className="navitem status">
              <div
                className={
                  this.state.status == "Online" ? "status-green" : "status-red"
                }
              />{" "}
              {this.state.status}
            </div>
          </div>
          <div className={this.state.menuClass}>
          <div className = "navitem">
            <Link to="/">Home</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/about">About</Link>
          </div></div>
          <i className="navitem fa fa-bars icon" onClick={this.dropdown} />
        </div></div>
      </ShiftDown>
      </div>
    );
  }
}

export default Header;
