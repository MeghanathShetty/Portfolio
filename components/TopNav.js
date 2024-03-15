import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { darkThemeStyle } from './utils/themeStyle';

const TopNav = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [themeText, setThemeText] = useState("");
  const [isDarkEnabled, setIsDarkEnabled] = useState(true);
  const [styleElement, setStyleElement] = useState(null);

  const handleNavLinkClick = () => {
    // Toggle the navbar when a navigation link is clicked
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleTheme = () => 
  {
    if (!isDarkEnabled) 
    {
      const style = darkThemeStyle();
      setStyleElement(style);
      document.head.appendChild(style);
      setIsDarkEnabled(true);
      setThemeText("Dark Mode");
    } else {
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
      setIsDarkEnabled(false);
      setThemeText("Light Mode");
    }
  };

  // Initially load appropriate theme based on user's system setting
  useEffect(() => 
  {
    const initializeTheme = () => 
    {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
      {
        setIsDarkEnabled(true);
        setThemeText("Dark Mode");
        const style = darkThemeStyle();
        setStyleElement(style);
        document.head.appendChild(style);
      } else {
        setIsDarkEnabled(false);
        setThemeText("Light Mode");
      }
    };
    initializeTheme();

    return () => {
      // Clean up the appended style element when the component unmounts
      if (styleElement && document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);


  const handleNavClick_And_Theme=()=>
  {
    // handle nav click
    setIsNavCollapsed(!isNavCollapsed);

    // handle theme
    handleTheme();
  }

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6vw"
            height="6vw"
            fill="currentColor" // 
            className="bi bi-list" 
            viewBox="0 0 16 16"
          >
          <path 
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>

        </button>

        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`}
          id="navbarNav">
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
            <li className="nav-item me-3 ms-auto">
              <a className="nav-link fs-5 nav-btn" onClick={handleNavClick_And_Theme}>
                {themeText}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
