import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navigation = (props) =>{
  const style = {
    borderBottom:'2px solid white',
  }
  return(
    <div className="nav-wrapper">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <span class="navbar-brand mb-0 mr-auto">Nishant Rao</span>
        <div id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" activeStyle={style} to="/">Home</Link>
            </li>
            <li className="nav-item" >
              <NavLink className="nav-link" activeStyle={style} to="/Skills">Skills</NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className="nav-link" activeStyle={style} to="/Work">Work</NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className="nav-link" activeStyle={style} to="/Resume">Resume</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
