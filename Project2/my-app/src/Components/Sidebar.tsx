import React from 'react';
import { MdNightsStay } from 'react-icons/md';
import { IoIosHome } from 'react-icons/io';

const Sidebar = () => {
  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid d-flex">
        <div className="d-inline-block pl-3">
          <a className="navbar-brand " href="#">
            Freelancer
          </a>
        </div>
        <div className="nav-links d-flex gap-4">
          <div className="nav-items">
            <a href="">Hire Freelancers</a>
          </div>
          <div className="nav-items">
            <a href="">Post a job</a>
          </div>
          <div className="nav-items">
            <a href="">Login</a>
          </div>
          <div className="nav-items">
            <a href="">Sign up</a>
          </div>
          <div>
            <MdNightsStay size={18} />
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"

          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Freelancer
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-1">
              <li className="nav-item">
                <div className="icons d-flex align-items-center">
                <a className="nav-link active d-flex align-items-lg-center" aria-current="page" href="#">
                  <IoIosHome size={20} />
                </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
