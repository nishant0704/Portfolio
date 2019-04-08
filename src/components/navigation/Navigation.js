import React ,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component{
  componentDidMount(){
    window.$('[data-toggle="tooltip"]').tooltip();
  }
  render(){
  return(
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light pb-0" style={{boxShadow:'none',backgroundColor:'transparent'}}>
        <Link className="navbar-brand" to="/">Nishant Rao</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="basicExampleNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link"  exact to="/" activeStyle={{borderBottom:'2px solid orange'}}><i className="fas fa-home" data-toggle="tooltip" data-placement="top" title="Home"></i></NavLink>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link"  to="/Skills" activeStyle={{borderBottom:'2px solid orange'}}><i className="fas fa-cogs" data-toggle="tooltip" data-placement="top" title="Skills"></i></NavLink>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link"  to="/Projects" activeStyle={{borderBottom:'2px solid orange'}}><i className="fas fa-laptop-code" data-toggle="tooltip" data-placement="top" title="Work"></i></NavLink>
          </li>
          {/*<li className="nav-item" >
            <NavLink className="nav-link"  to="/Projects" activeStyle={{borderBottom:'2px solid orange'}}><i className="far fa-user-circle" data-toggle="tooltip" data-placement="top" title="About"></i></NavLink>
          </li>*/}
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
