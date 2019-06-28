import React from 'react';
import logo from '../assets/logo.png';

import './NavBar.css';

import Button from './Button';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-contents">
          <div className="logo">
            <img src={logo} className="logo" />
          </div>
          <div className="dropdown-emulator">
            <i className="fas fa-fire-alt blue-fire" />
            <h1 className="popular">Popular</h1>
          </div>
          <div className="searchbar-container">
            <i className="fas fa-search" />
            <input
              type="search"
              placeholder="Search Reddit"
              className="searchbar"
            />
          </div>
          <a href="#">
            <i className="fas fa-fire-alt" />
          </a>
          <a href="#">
            <i className="far fa-chart-bar" />
          </a>
          <a href="#">
            <i className="fas fa-quote-left" />
          </a>
          <a href="#" className="login">
            LOGIN
          </a>
          <a href="#" className="signup">
            SIGN UP
          </a>
          <i className="fas fa-user" />
          <i className="fas fa-angle-down" />
        </div>
      </div>
    );
  }
}

export default NavBar;
