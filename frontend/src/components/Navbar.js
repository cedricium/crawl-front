import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

class Header extends Component {
  constructor () {
    super();
    this.dropdown = this.dropdown.bind(this);
    this.state = {
      menuClass: "header-menu",
      status: "Offline"
    };
  }

  dropdown () {
    if (this.state.menuClass === "header-menu") {this.setState({ menuClass: "header-menu responsive" });} else {
      this.setState({ menuClass: "header-menu" });
    }
  }

  render () {
    return (
      <div className="header">
        <div className="logo">
          <NavLink to="/" class="logo-link">
            <img className="logo-dcrawl" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" />
            <h1 className="logo-name">DiscordCrawler</h1>
          </NavLink>
          <div className="status">
            <div className={this.state.status === "Online" ? "status-green" : "status-red"} />
            {this.state.status}
          </div>
        </div>
        <div className={this.state.menuClass}>
          <NavLink exact to="/">Live Mode</NavLink>
          <NavLink to="/all">All Servers</NavLink>
          <NavLink to="/stats">Stats</NavLink>
        </div>
        <i className="fa fa-bars icon" onClick={this.dropdown} />
      </div>
    );
  }
}

export default Header;
