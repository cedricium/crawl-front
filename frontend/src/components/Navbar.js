import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/" class="logo-link">
            <img className="logo-dcrawl" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" />
            <h1 className="logo-name">DiscordCrawler</h1>
          </Link>
          <div className="status">
            <div className={this.state.status === "Online" ? "status-green" : "status-red"} />
            {this.state.status}
          </div>
        </div>
        <div className={this.state.menuClass}>
          <Link to="/">Live Mode</Link>
          <Link to="/all">All Servers</Link>
          <Link to="/stats">Stats</Link>
        </div>
        <i className="fa fa-bars icon" onClick={this.dropdown} />
      </div>
    );
  }
}

export default Header;
