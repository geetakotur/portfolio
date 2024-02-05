import React from 'react';

export default function Footer() {
  const iconStyle = {
    marginRight: '20px',
    fontSize: '30px',
    color: 'lightblue'
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
    height: '100%',
    left:'80%'
  };

  return (
    <div>
      <footer className="bg-dark text-light text-center py-3">
        <div className="container" style={centerStyle}>
          <div className="row">
            <div className="col-md-4">
              <ul className="list-unstyled d-flex mx-3">
                <a href="https://www.instagram.com/geeta___rk">
                  <i className="fa fa-instagram" style={iconStyle}></i>
                </a>
                <a href="https://linkedin.com/in/geeta-kotur-0a03581aa">
                  <i className="fa fa-linkedin" style={iconStyle}></i>
                </a>
                <a href="https://github.com/geetakotur">
                  <i className="fa fa-github" style={iconStyle}></i>
                </a>
                <a href="mailto:geetakotur7988@gmail.com">
                  <i className="fa fa-envelope" style={iconStyle}></i>
                </a>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a href="#scrollspyHeading1">Home</a></li>
                <li className="ms-3"><a href="#scrollspyHeading2">About</a></li>
                <li className="ms-3"><a href="#scrollspyHeading3">Education</a></li>
                <li className="ms-3"><a href="#scrollspyHeading4">Skills</a></li>
                <li className="ms-3"><a href="#scrollspyHeading5">Projects</a></li>
                <li className="ms-3"><a href="https://drive.google.com/file/d/1Zsdx6W3Rg-kGn5KO89VxDsWX5Y_hIban/view?usp=drive_link">Resume</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center p-3">
           <h1>Geeta Kotur</h1>
           <h5>+91-7019534282</h5>
           
          </div>
        </div>
      </footer>
    </div>
  );
}
