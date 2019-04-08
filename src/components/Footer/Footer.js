import React from 'react';
import './Footer.css';

const footer = () => {
  return(
    <footer className="page-footer bg-transparent pt-2 black-text">
        <div className="container text-center text-md-left">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left mb-1">©Nishant Rao 2019</p>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline mb-1">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/nishanth.rao.5" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f black-text"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-email mx-1" href="mailto:nishanthrao29@gmail.com" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-envelope black-text"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-git mx-1" href="https://github.com/nishant0704" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github black-text"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-li mx-1" href="www.linkedin.com/in/nishant-rao-a681679b" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in black-text"></i>
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
