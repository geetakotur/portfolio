import React from 'react';

export default function Education() {
  // const backgroundImageStyle = {
  //   backgroundImage: 'url("BG.jpg")', // Replace with the actual path to your image
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '250vh', // Adjust the height as needed
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '#ffffff', // Text color on top of the background
  //   fontSize: '24px', // Adjust the font size as needed
  //   textAlign: 'center',
  //   position: 'relative',
  // };
  const educationContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Center the content horizontally
  };

  const verticalLineStyle = {
    width: '3px',
    height: '100px', // Adjust the height as needed
    backgroundColor: 'grey',
    margin: '0 10px',
  };

  const circleContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100px', // Adjust the width of the images as needed
    height: '100px', // Adjust the height of the images as needed
    borderRadius: '50%',
    margin: '10px 0', // Adjust the space between the images and the line as needed
  };

 

 



  return (
    <div>
        
      <div className="education-container" style={educationContainerStyle}>
        <div className="circle-container" style={circleContainerStyle}>
          <img src="sslc.jpeg" alt="sslc" className="circle-image" style={imageStyle} /><h4>SSLC</h4><br /><p>B.M.E.M.H School,Dharwad</p><br /><p>Passout year:2016</p><br /><p>Score:79.04%</p>
          <div className="vertical-line" style={verticalLineStyle}></div>
          <img src="pu1.jpeg" alt="puc" className="circle-image" style={imageStyle} /><h4>PUC</h4><br /><p>JSS RSH PU college,Dharwad</p><br /><p>Passout year:2018</p><br /><p>Score:72.83%</p>
          <div className="vertical-line" style={verticalLineStyle}></div>
          <img src="bca1.jpeg" alt="bca" className="circle-image" style={imageStyle} /><h4>BCA</h4><br /><p>JSS SMI UG and PG studies,Dharwad</p><br /><p>Passout year:2021</p><br /><p>Score:87.34%</p>
          <div className="vertical-line" style={verticalLineStyle}></div>
          <img src="mca.jpg" alt="mca" className="circle-image" style={imageStyle} /><h4>MCA</h4><br /><p>KLE Technological University,hubli</p><br /><p>Passout year:2023</p><br /><p>Score:8.94 cgpa</p>
        </div>
        
      </div>
    </div>
  );
}
