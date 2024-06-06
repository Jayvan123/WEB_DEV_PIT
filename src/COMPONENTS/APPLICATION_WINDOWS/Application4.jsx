import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_img from '../../IMAGES/logo-school.png';

const Application1 = () => {
  return (
    <div className='flex flex-col h-screen'> {/* Header */}
      <div className='h-[90px] bg-[#072F5F] text-white flex items-center'>
        <div className='h-[90px] w-[90px] ml-[10px]'>
          <img src={logo_img} alt="" className='object-cover'/>
        </div>
        <div className='flex ml-[20px] text-white text-[20px] font-serif'>
          JMHTech Institute: Empowering Tomorrows Innovators
        </div>
      </div>

      <div className='flex flex-1 h-full'> {/* Sidebar */}
        <div className='w-[80px] bg-[#213A59] text-white flex flex-col'></div>
        <div className='flex-1 p-4'>  {/* Main Content */}
          <div className='h-[40px] bg-[#D1DDED] rounded-[5px]'></div>
          <div className='h-[520px] mt-[10px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px]'>
            <div className='flex h-[45px] w-[500px] bg-[#213A59] ml-[15px] mt-[15px] rounded-[5px] text-[20px] text-white font-serif items-center justify-center'>
              <h1>CONFIRMATION :</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px]'>
              __________________________________________________________________________________________________________
            </h1>
            <div className='flex flex-col'>
              
              

              <div className='flex flex-row'>
                <div className='flex items-center justify-between w-full mt-[190px]'>
                  <NavLink to='/application3' className='ml-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                    Back  
                  </NavLink>
                  <NavLink to='/' className='mr-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                    Proceed
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application1;
