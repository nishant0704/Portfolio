import React from 'react';
import './Footer.css';

const footer = () => {
  return(
    <footer className="page-footer bg-transparent pt-4">
        <div className="container text-center text-md-left">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">© 2019 Nishant Rao</p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1" href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-ins mx-1" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-git mx-1" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </footer>
  );
}
 export default footer;






{/*
  <div classNameNameName="footer-container d-inline">
    <div classNameNameName="">
      <a href="https://www.google.com"><i classNameNameName="fab fa-linkedin social-icons"></i></a>
      <a href="https://www.google.com"><i classNameNameName="fab fa-github-square social-icons"></i></a>
      <a href="https://www.google.com"><i classNameNameName="fab fa-facebook social-icons"></i></a>
      <a href="https://www.google.com"><i classNameNameName="fab fa-instagram social-icons"></i></a>
      <span>&copy;Nishant Rao</span>
    </div>
  </div>

  <footer classNameName="page-footer font-small bg-transparent pt-4">

      <div classNameName="container">

        <ul classNameName="list-unstyled list-inline text-center">
          <li classNameName="list-inline-item">
            <a classNameName="btn-floating btn-fb mx-1" href="#">
              <i classNameName="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li classNameName="list-inline-item">
            <a classNameName="btn-floating btn-tw mx-1">
              <i classNameName="fab fa-twitter"> </i>
            </a>
          </li>
          <li classNameName="list-inline-item">
            <a classNameName="btn-floating btn-gplus mx-1">
              <i classNameName="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li classNameName="list-inline-item">
            <a classNameName="btn-floating btn-li mx-1">
              <i classNameName="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li classNameName="list-inline-item">
            <a classNameName="btn-floating btn-dribbble mx-1">
              <i classNameName="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>

      </div>

      <div classNameName="footer-copyright text-center py-3">© 2019 Nishant Rao</div>

    </footer>
  */}
