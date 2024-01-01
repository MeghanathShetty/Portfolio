import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavLinkClick = () => {
    // Toggle the navbar when a navigation link is clicked
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid ms-auto top-main">
        <button
          className="navbar-toggler ms-auto nav-toggle-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3 ms-auto">
              <a className="nav-link fs-5 nav-btn" href="#Home" onClick={handleNavLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item me-3 ms-auto">
              <a className="nav-link fs-5 nav-btn" href="#Projects" onClick={handleNavLinkClick}>
                Projects
              </a>
            </li>
            <li className="nav-item me-3 ms-auto">
              <a className="nav-link fs-5 nav-btn" href="#Contact" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
