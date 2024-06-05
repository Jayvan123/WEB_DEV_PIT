import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginwindow from './COMPONENTS/LOGIN_WINDOWS/Loginwindow';
import About from './COMPONENTS/LOGIN_WINDOWS/About';
import Requirements from './COMPONENTS/LOGIN_WINDOWS/Requirements';
import Application1 from './COMPONENTS/APPLICATION_WINDOWS/Application1';
import Application2 from './COMPONENTS/APPLICATION_WINDOWS/Application2'; 
import Application3 from './COMPONENTS/APPLICATION_WINDOWS/Application3'

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Loginwindow />} />
        <Route path="/about" element={<About />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/application1" element={<Application1 />} />
        <Route path="/application2" element={<Application2 />} />
        <Route path="/application3" element={<Application3 />} />

      </Routes>
    </Router>
  );
  
}

export default App;