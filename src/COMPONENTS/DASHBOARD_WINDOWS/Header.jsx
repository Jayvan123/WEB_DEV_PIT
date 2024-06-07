import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_school from '../../IMAGES/IMAGES_LOGINWINDOW/logo-school.png';
import user_logo from '../../IMAGES/IMAGES_DASHBOARD/user-logo.png';

const Header = () => {
  return (
    <div className='h-[90px] bg-[#072F5F] text-white flex items-center'>
      <div className='h-[90px] w-[90px] ml-[10px]'>
        <img src={logo_school} alt="" className='object-cover' />
      </div>
      
      <div className='flex ml-[20px] text-white text-[20px] font-serif'>
        JMHTech Institute: Empowering Tomorrows Innovators
      </div>
      
      <div className='flex items-center ml-[600px] mr-[50px]'>
        <div className='h-[70px] w-[70px]'>
          <img src={user_logo} alt="" className='object-cover' />
        </div>
        <div className='ml-[10px] flex flex-col'>
          <label htmlFor="userlabel" className='text-white text-[20px] font-sans'>Student Name</label>
          {/* <p className='text-white text-[15px] font-sans'>Year Level</p> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
