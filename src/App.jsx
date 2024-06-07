import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginwindow from './COMPONENTS/LOGIN_WINDOWS/Loginwindow';
import About from './COMPONENTS/LOGIN_WINDOWS/About';
import Requirements from './COMPONENTS/LOGIN_WINDOWS/Requirements';
import Application1 from './COMPONENTS/APPLICATION_WINDOWS/Application1';
import Application2 from './COMPONENTS/APPLICATION_WINDOWS/Application2';
import Application3 from './COMPONENTS/APPLICATION_WINDOWS/Application3';
import Application4 from './COMPONENTS/APPLICATION_WINDOWS/Application4';
import Dashboard from './COMPONENTS/DASHBOARD_WINDOWS/Dashboard';
import StudentInfo from './COMPONENTS/DASHBOARD_WINDOWS/StudentInfo'; // Add this import
import Enrollment from './COMPONENTS/DASHBOARD_WINDOWS/Enrollment'; // Add this import

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
        <Route path="/application4" element={<Application4 />} />

        {/* Dashboard Route with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="student_info" element={<StudentInfo />} />
          <Route path="enrollment" element={<Enrollment />} />
          {/* Add more nested routes here as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
