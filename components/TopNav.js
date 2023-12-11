import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {


  return (
            <nav className="navbar navbar-expand-lg" >
            <div className="container-fluid ms-auto top-main" >
            <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item me-3">
                    <a className="nav-link fs-5" href="#">Home</a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link fs-5" href="#">About</a>
                </li>
                <li className="nav-item me-3">
                    <a className="nav-link fs-5" href="#">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
  );
};

export default TopNav;
