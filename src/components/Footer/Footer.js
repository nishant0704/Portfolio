import React from 'react';
import './Footer.css';

const footer = () => {
  return(
    <div className="footer-container">
      <div className="row m-0">
        <div className="col-5 text-left">
          <p>&copy;Nishant Rao</p>
        </div>
        <div className="text-center">
          <a href="https://www.google.com"><i className="fab fa-linkedin social-icons"></i></a>
          <a href="https://www.google.com"><i className="fab fa-github-square social-icons"></i></a>
          <a href="https://www.google.com"><i className="fab fa-facebook social-icons"></i></a>
          <a href="https://www.google.com"><i className="fab fa-instagram social-icons"></i></a>
        </div>
      </div>
    </div>
  );
}
 export default footer;
