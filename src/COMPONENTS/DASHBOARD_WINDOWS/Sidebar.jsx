import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[200px] bg-[#213A59] text-white flex flex-col'>

      <NavLink to="/dashboard" className='p-[10px] text-white'>Dashboard</NavLink>
      <NavLink to="/dashboard/student_info" className='p-[10px] text-white'>Student Info</NavLink>
      <NavLink to="/dashboard/enrollment" className='p-[10px] text-white'>Enrollment</NavLink>
      <NavLink to="/" className='p-[10px] text-white'>Log Out</NavLink>
      
    </div>
  );
}

export default Sidebar;