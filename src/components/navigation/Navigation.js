import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component{
  componentDidMount(){
    window.$('[data-toggle="tooltip"]').tooltip();
  }
  render(){
  return(
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark pb-0" style={{backgroundColor:'transparent'}}>
        <Link className="navbar-brand" to="/">Nishant Rao</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link"  to="/"><i className="fas fa-home" data-toggle="tooltip" data-placement="top" title="Home"></i></Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link"  to="/Skills"><i className="fas fa-cogs" data-toggle="tooltip" data-placement="top" title="Skills"></i></Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link"  to="/Projects"><i className="fas fa-laptop-code" data-toggle="tooltip" data-placement="top" title="Work"></i></Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link"  to="/Projects"><i className="far fa-user-circle" data-toggle="tooltip" data-placement="top" title="About"></i></Link>
          </li>
          <li className="nav-item" >
            <a className="nav-link"  href="/Resume"><i className="fas fa-file-pdf" data-toggle="tooltip" data-placement="top" title="Resume"></i></a>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  );
 }
}

export default Navigation;
