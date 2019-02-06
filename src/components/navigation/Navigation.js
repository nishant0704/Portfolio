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
              <a className="nav-link"  href="/"><i class="fas fa-home" data-toggle="tooltip" data-placement="top" title="Home"></i></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link"  href="/Skills"><i class="fas fa-cogs" data-toggle="tooltip" data-placement="top" title="Skills"></i></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link"  href="/Work"><i class="fas fa-laptop-code" data-toggle="tooltip" data-placement="top" title="Work"></i></a>
            </li>
            <li className="nav-item" >
              <a className="nav-link"  href="/Resume"><i class="fas fa-file-pdf" data-toggle="tooltip" data-placement="top" title="Resume"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
