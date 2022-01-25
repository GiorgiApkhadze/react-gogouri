import React from 'react';
import logoImg from '../../img/logo.png';
import playstore1 from '../../img/playstore1.png';
import appsotore from '../../img/appstore.png';
import banner from '../../img/banner.png';

function Nav() {
  return (
    <div>
      <div className="navbar navbar-expand-md">
        <div className="container">
          <a href="/" className="navbar-brand">
            {' '}
            <img src={logoImg} alt="img" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-justify"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-5">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  მთავარი <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/blog">
                  ბლოგი{' '}
                </a>
              </li>
            </ul>
            <button className="button ml-auto">გადმოწერე აპლიკაცია</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
