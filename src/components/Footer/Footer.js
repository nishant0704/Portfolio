import React from 'react';
import './Footer.css';

const footer = () => {
  return(
    <div className="footer-container d-inline">
      <div className="">
        <a href="https://www.google.com"><i className="fab fa-linkedin social-icons"></i></a>
        <a href="https://www.google.com"><i className="fab fa-github-square social-icons"></i></a>
        <a href="https://www.google.com"><i className="fab fa-facebook social-icons"></i></a>
        <a href="https://www.google.com"><i className="fab fa-instagram social-icons"></i></a>
        <span>&copy;Nishant Rao</span>
      </div>
    </div>
  );
}
 export default footer;
