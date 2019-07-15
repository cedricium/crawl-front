import { Link } from 'react-router-dom'
import '../styles/header.css'
import React, {Component} from 'react';

class Header extends Component {
  // todo: send REQUEST to backend to check for status state
  state = {
    menuClass: "header-menu",
    status: "Offline"
  }
    constructor() {
        super();  
        this.dropdown = this.dropdown.bind(this);
        this.state = {
          menuClass: "header-menu",
          status: "Offline"
        }
    }
    
    // handler for the responsive menu dropdown
    dropdown() {
        if (this.state.menuClass == "header-menu")
          this.setState({menuClass: "header-menu responsive"});
        else {
          this.setState({menuClass: "header-menu"});
        }
      }

      render() {
        return (
          <div className="header">
            <div className="logo">
              <Link to="/" className="logo-link">
                <img className="logo-diamond" src="https://vignette.wikia.nocookie.net/spartaremix/images/e/ec/Discord-new-logo.png/revision/latest?cb=20180224071554" />
                <h1 className="logo-name">DiscordCrawler</h1>
              </Link>
              <div className="status"><div className={this.state.status == "Online" ? "status-green" : "status-red"}></div> {this.state.status}</div>
            </div>
            <div className={this.state.menuClass}>
              <Link to="/">Home</Link>
              <Link to="/stats">Stats</Link>
              <Link to="/about">About</Link>
            </div>
            <i className="fa fa-bars icon" onClick={this.dropdown}></i>
          </div>
        );
      }
    }
    
    export default Header