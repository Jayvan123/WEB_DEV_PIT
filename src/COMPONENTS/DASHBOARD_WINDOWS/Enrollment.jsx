import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Enrollment = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        
        <Sidebar />
        
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>

          <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
            <h1 className = 'ml-[10px]'>Welcome back, User</h1>
          </div>

          <div className='h-[520px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px]'>
            <p>ENROLLMENT</p>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Enrollment;
