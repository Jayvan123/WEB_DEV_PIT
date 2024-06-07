import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[200px] bg-[#213A59] text-white flex flex-col'>
      <NavLink to="/dashboard" className='p-[10px] text-white'>Dashboard</NavLink>
      <NavLink to="/dashboard/student-info" className='p-[10px] text-white'>Student Info</NavLink>
      <NavLink to="/dashboard/enrollment" className='p-[10px] text-white'>Enrollment</NavLink>
      {/* Add more links as needed */}
    </div>
  );
}

export default Sidebar;
