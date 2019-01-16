import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = (props) =>{
  return(
    <div className="nav-wrapper">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand mr-auto" to="/">Nishant Rao</Link>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/Skills">Skills</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/Work">Work</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/Resume">Resume</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
