import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginwindow from './COMPONENTS/LOGIN_WINDOWS/Loginwindow';
import About from './COMPONENTS/LOGIN_WINDOWS/About';
import Requirements from './COMPONENTS/LOGIN_WINDOWS/Requirements';
import Application1 from './COMPONENTS/APPLICATION_WINDOWS/Application1';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginwindow />} />
        <Route path="/about" element={<About />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/application1" element={<Application1 />} />
      </Routes>
    </Router>
  );
  
}

export default App;
