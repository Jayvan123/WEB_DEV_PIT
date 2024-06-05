import React from 'react';
import { NavLink } from 'react-router-dom';
import bg_img from '../IMAGES/bg-window.png';

const Requirements = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex-row ml-[100px] mt-[40px] h-[600px] w-[600px] bg-[#213A59] rounded-[10px]'>
        <div className='flex flex-col items-center'>
          <h1 className='font-sans font-bold text-white text-[20px] mt-[80px]'>About JMHTech Institute</h1>
          <div className='font-sans text-white text-[15px] mt-[50px] w-[75%]'>
            <p>1. Softcopy/photocopy of Grade 12 Report Card (Complete Pages)</p>
            <p>2. Softcopy/photocopy of Grade 12 School ID or Certificate of Enrollment/Registration</p>
            <p>3. Softcopy/photocopy of 2x2 ID Photo in white Background</p>
            <p>4. Softcopy/photocopy of NSO/PSA Birthday Certificate</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <NavLink to="/" className='font-sans font-bold text-white text-[15px] ml-[25px] mt-[280px]'>
            Back
          </NavLink>
        </div>
      </div>
      <div className='ml-[90px] mt-[] h-[680px] w-[700px] rounded-[10px] overflow-hidden'>
        <img src={bg_img} alt="" className='object-cover w-full h-full'/>
      </div>
    </div>
  );
}

export default Requirements;
