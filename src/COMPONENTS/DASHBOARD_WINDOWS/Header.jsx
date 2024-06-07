import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_school from '../../IMAGES/IMAGES_LOGINWINDOW/logo-school.png';
import user_logo from '../../IMAGES/IMAGES_DASHBOARD/user-logo.png';
import logout_logo from '../../IMAGES/IMAGES_DASHBOARD/logout-logo.png'


const Header = () => {
  return (
    <div className='h-[90px] bg-[#072F5F] text-white flex items-center'>
      <div className='h-[90px] w-[90px] ml-[10px]'>
        <img src={logo_school} alt="" className='object-cover' />
      </div>
      
      <div className='flex ml-[20px] text-white text-[20px] font-serif'>
        JMHTech Institute: Empowering Tomorrows Innovators
      </div>
      
      <div className='flex items-center ml-auto mr-[50px]'>
        <div className='flex items-center mr-[30px]'>
          <div className='h-[70px] w-[70px]'>
            <img src={user_logo} alt="" className='object-cover' />
          </div>
          <div className='ml-[10px] flex flex-col'>
            <label htmlFor="userlabel" className='text-white text-[20px] font-sans'>Student Name</label>
            <p>Year Level</p>
          </div>
        </div>
        
        <div className='flex items-center ml-[20px]'>
          <div className='h-[30px] w-[30px]'>
            <img src={logout_logo} alt="" />
          </div>
          <NavLink to="/" className='ml-[5px] text-white'>Log Out</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;