import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentInfo = () => {
  return (
    <div>
      <h2>Student Information</h2>

      <div className='flex-1 bg-[#f0f0f0] p-[20px]'>

      
        <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
          <h1 className = 'ml-[10px]'>Welcome back, User</h1>
        </div>

        <div className='h-[520px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px]'>
        <p>STUINFO</p>
        </div>

      </div>

    </div>
  );
}

export default StudentInfo;
