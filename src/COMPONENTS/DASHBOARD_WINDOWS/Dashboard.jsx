import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>

          <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
            <h1 className='ml-[10px]'>Welcome Back, User</h1>
          </div>

          <div className='flex flex-wrap bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px] p-[20px] justify-around'>
            <div className='flex flex-wrap w-full'>
              <button className='flex flex-col items-center justify-center h-[150px] w-[350px] bg-[#758AA5] rounded-[10px] m-[10px]'>
                <span className='text-white text-lg'>NOTIFICATIONS</span>
                <span className='text-white mt-[10px]'>See All</span>
              </button>
              
              <button className='flex flex-col items-center justify-center h-[150px] w-[350px] bg-[#FF3131] rounded-[10px] m-[10px]'>
                <span className='text-white text-lg'>ENROLLMENT</span>
              </button>
              
              <button className='flex flex-col items-center justify-center h-[150px] w-[350px] bg-[#1E90FF] rounded-[10px] m-[10px]'>
                <span className='text-white text-lg'>GRADES</span>
              </button>

              <button className='flex flex-col items-center justify-center h-[150px] w-[350px] bg-[#E26A6A] rounded-[10px] m-[10px]'>
                <span className='text-white text-lg'>GET SOME HELP</span>
                <span className='text-white mt-[10px]'>See All</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
