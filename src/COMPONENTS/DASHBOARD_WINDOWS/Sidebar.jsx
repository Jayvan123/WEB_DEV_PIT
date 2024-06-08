import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import dashboard_logo from '../../IMAGES/IMAGES_DASHBOARD/dashboard-logo.png';
import student_logo from '../../IMAGES/IMAGES_DASHBOARD/studentinfo-logo.png';
import enrollment_logo from '../../IMAGES/IMAGES_DASHBOARD/enrollment-logo.png';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-[#213A59] text-white flex flex-col ${isExpanded ? 'w-[200px]' : 'w-[60px]'} transition-all duration-300`}>
      <div 
        className='w-[40px] h-[40px] bg-[#1E90FF] mt-[20px] ml-auto mr-[10px] rounded-[5px] flex items-center justify-center cursor-pointer'
        onClick={toggleSidebar}
      >
        {isExpanded ? '-' : '+'}
      </div>

      <div className='mt-[20px] font-serif'>
        <NavLink to="/dashboard" className='p-[10px] text-white flex items-center ml-[5px]'>
          <img src={dashboard_logo} alt="Dashboard Icon" className='w-[30px] h-[30px] mr-[8px]' />
          <span className={`${isExpanded ? 'inline' : 'hidden'}`}>DASHBOARD</span>
        </NavLink>
        <NavLink to="/dashboard/student_info" className='p-[10px] text-white flex items-center ml-[5px]'>
          <img src={student_logo} alt="Student Info Icon" className='w-[30px] h-[30px] mr-[8px]' />
          <span className={`${isExpanded ? 'inline' : 'hidden'}`}>STUDENT INFO</span>
        </NavLink>
        <NavLink to="/dashboard/enrollment1" className='p-[10px] text-white flex items-center ml-[5px]'>
          <img src={enrollment_logo} alt="Enrollment Icon" className='w-[30px] h-[30px] mr-[8px]' />
          <span className={`${isExpanded ? 'inline' : 'hidden'}`}>ENROLLMENT</span>
        </NavLink>
        {/* <NavLink to="/" className='p-[10px] text-white'>Log Out</NavLink> */}
      </div>
    </div>
  );
};

export default Sidebar;
