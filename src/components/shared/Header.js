import React, { Component } from "react";
import { Route, Link, NavLink  } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            Router Demo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink activeClassName='active' exact={true} className="nav-link" to="/">
                           Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" to="/listing">
                           Listing
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about-us">
                           About US
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact-us">
                           Contact US
                        </NavLink>
                    </li> 
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">
                           Services
                        </NavLink>
                    </li> 
                </ul>
                <ul className="navbar-nav my-2 my-lg-0"> 
                        <li className="nav-item dropdown">
                            <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                            User
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                            </div>
                        </li> 
                </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
