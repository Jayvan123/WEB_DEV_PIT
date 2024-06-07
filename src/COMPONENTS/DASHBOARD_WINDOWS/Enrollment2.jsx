import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Enrollment2 = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        
        <Sidebar />
        
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>

          <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
          </div>

          <div className='h-[520px] w-[1290px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px]'>
            {/* CONTENT */}
            
            <div className='flex h-[45px] w-[500px] bg-[#213A59] ml-[15px] mt-[15px] rounded-[5px] text-[20px] text-white font-serif items-center justify-center'>
              <h1>Enrollment Process 1/3</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px] mt-[20px]'>PERSONAL INFORMATION</h1>
            
            <h1 className='text-[20px] font-serif ml-[15px]'>
              __________________________________________________________________________________________________________
            </h1>
            

            {/* CONTENT */}
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Enrollment2;