import React from 'react';

export default function Skills() {
  // const backgroundImageStyle = {
  //   backgroundImage: 'url("BG.jpg")',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   minHeight: '30vh',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: '#ffffff',
  //   fontSize: '24px',
  //   textAlign: 'center',
  //   position: 'relative',
  // };

  const profileImagesContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const profileImageCommonStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '10px', // Add margin for spacing between images
    border: '3px solid grey',
  };

  return (
    <div>
      <div style={profileImagesContainerStyle}>
        <img src="c.jpeg" alt="profile" style={profileImageCommonStyle} />
        <img src="java.jpeg" alt="profile" style={profileImageCommonStyle} />
        <img src="flutter.jpeg" alt="profile" style={profileImageCommonStyle} />
        <img src="fb.jpeg" alt="profile" style={profileImageCommonStyle} />
        <img src="htmlcssjs.jpeg" alt="profile" style={profileImageCommonStyle} />
        <img src="mysql.jpeg" alt="profile" style={profileImageCommonStyle} />
        <img src="react.jpeg" alt="profile" style={profileImageCommonStyle} />
      </div>
    </div>
  );
}
