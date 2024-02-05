import React from 'react';


export default function BG() {
  
  const backgroundImageStyle = {
    backgroundImage: 'url("https://i.gifer.com/HKVW.gif")', // Replace with the actual path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust the height as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff', // Text color on top of the background
    fontSize: '24px', // Adjust the font size as needed
    textAlign: 'center',
    position: 'relative',
  };

  const profileImageStyle = {
    width: '200px', // Adjust the width of the profile image
    height: '200px', // Adjust the height of the profile image
    borderRadius: '70%', // Make it a circle (optional)
    position: 'absolute',
    top: '35%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center precisely
    border: '3px solid white', // Optional: Add a border to the image
  };

  const text1 = {
    color: '#ffffff',
    fontSize: '40px',
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
  };

  const para = {
    color: '#ffffff',
    fontSize: '25px',
    position: 'absolute',
    top: '65%',
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
  };

  const soc={
    position: 'absolute',
    top: '84%',
    left: '51%',
    transform: 'translateX(-50%)',
   // color: '#ffffff',

  };

  const iconStyle = {
    marginRight: '20px',
    fontSize:'35px',
    color:'#ffffff'
  };



  

  return (
    <>
    <div style={backgroundImageStyle}>
       <img src="gk.jpg" alt="profile" style={profileImageStyle} />
    <div className="container">
      <h1><span style={text1}>Geeta Kotur</span></h1> 
      <h2 style={para}>MCA Graduate, Frontend Developer</h2>
      <div className="social" style={soc}>
      <a href="https://www.instagram.com/geeta___rk"><i className="fa fa-instagram" style={iconStyle}></i></a>
    <a href="https://linkedin.com/in/geeta-kotur-0a03581aa" ><i className="fa fa-linkedin" style={iconStyle}></i></a>
    <a href="https://github.com/geetakotur" ><i className="fa fa-github" style={iconStyle}></i></a>
    <a href="mailto:geetakotur7988@gmail.com" ><i className="fa fa-envelope" style={iconStyle}></i></a>
    </div> 
      </div>
    </div>
   
    </>
  );
  }
