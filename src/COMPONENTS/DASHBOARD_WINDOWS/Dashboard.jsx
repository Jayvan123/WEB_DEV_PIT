import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

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
          <div className='h-[520px] w-[1290px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px] p-[50px]'>
            
            <div className='flex flex-wrap justify-between'>

              <button className='flex flex-col items-center justify-center h-[200px] w-[400px] bg-[#758AA5] rounded-[5px]'>
                <span className='text-lg font-bold text-white'>NOTIFICATIONS</span>
                <span className='text-white mt-[10px]'>See All</span>
              </button>

              <button className='flex flex-col items-center justify-center h-[200px] w-[200px] bg-[#FF3131] rounded-[5px]'>
                <span className='text-lg text-white'>ENROLLMENT</span>
              </button>

              <button className='flex flex-col items-center justify-center h-[200px] w-[200px] bg-[#1E90FF] rounded-[5px]'>
                <span className='text-lg text-white'>GRADES</span>
              </button>

              <button className='flex flex-col items-center justify-center h-[200px] w-[400px] bg-[#E26A6A] rounded-[5px] mt-[10px]'>
                <span className='text-lg text-white'>GET SOME HELP</span>
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
