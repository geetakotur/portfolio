// App.js
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Resume from './components/Resume';

function App() {
  return (
    // <Router>
      <div>
      
        <Nav/>
        {/* <Routes>
          <Route path="/about"/>
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
