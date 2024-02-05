import React from 'react';
import BG from './BG';
import About from './About';
import Project from './Project';
import Education from './Education';
import Skills from './Skills';

import Footer from './Footer';


export default function Nav() {
  const nav = {
    position: 'fixed',
    top: 0,
    width: '100%', // Add this line to make the navbar take the full width
    zIndex: 1000, // Add this line to ensure the navbar appears above other elements
  };
  return (
    <>
      <div>
        <nav id="navbar-example2" className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end mb-1" style={nav}>
          <a className="navbar-brand text-white" href="/">Geeta Kotur</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link text-white" href="#scrollspyHeading1">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#scrollspyHeading2">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#scrollspyHeading3">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#scrollspyHeading4">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#scrollspyHeading5">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://drive.google.com/file/d/1Zsdx6W3Rg-kGn5KO89VxDsWX5Y_hIban/view?usp=drive_link">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className=".scrollspy-example h4" tabIndex="0">
          <h4 id="scrollspyHeading1">{<BG/>}</h4>
          <h4 id="scrollspyHeading2">{<About/>}</h4><br /><h1><b><center>Education</center></b></h1>
          <h4 id="scrollspyHeading3">{<Education/>}</h4><br /><h1><b><center>Skills</center></b></h1>
          <h4 id="scrollspyHeading4">{<Skills/>}</h4>
          <br /><h1><b><center>My Top Projects</center></b></h1>
          <h4 id="scrollspyHeading5">{<Project/>}</h4><br />
      
       <Footer/>
        
        </div>
      </div>
    </>
  );
}
