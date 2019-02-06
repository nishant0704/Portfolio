import React from 'react';
import './Navigation.css';

const Navigation = () =>{
  return(
    <div className="nav-wrapper">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand mb-0 mr-auto" href="/">NISHANT RAO</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link"  href="/">Home</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link"  href="/Skills">Skills</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link"  href="/Work">Work</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link"  href="/Resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
