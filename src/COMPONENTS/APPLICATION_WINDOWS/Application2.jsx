import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_school from '../../IMAGES/IMAGES_LOGINWINDOW/logo-school.png';

const Application2 = () => {
  return (
    <div className='flex flex-col h-screen'> {/* Header */}
      <div className='h-[90px] bg-[#072F5F] text-white flex items-center'>
        <div className='h-[90px] w-[90px] ml-[10px]'>
          <img src={logo_school} alt="" className='object-cover'/>
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
              <h1>Please complete the form for your application:</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px] mt-[20px]'>PERSONAL INFORMATION</h1>
            <h1 className='text-[20px] font-serif ml-[15px]'>
              __________________________________________________________________________________________________________
            </h1>

            <div className='flex flex-row'>
                <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                  Surname
                  <input type='text' id='surname' className='ml-[] mt-[5px] h-[30px] w-[250px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>

                <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                  Given Name
                  <input type='text' id='given_name' className='ml-[] mt-[5px] h-[30px] w-[250px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>

                <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                  Middle Name
                  <input type='text' id='middle_name' className='ml-[] mt-[5px] h-[30px] w-[250px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>

                <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                  M.I.
                  <input type='text' id='MI' className='ml-[] mt-[5px] h-[30px] w-[100px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>

                <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                  Ext
                  <input type='text' id='ext' className='ml-[] mt-[5px] h-[30px] w-[100px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
            </div>

            <div className='flex flex-row'>
              <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                <label>Date of Birth</label>
                <div className='flex flex-row mt-[5px] space-x-2'>
                  <input
                    type='text'
                    placeholder='Year'
                    className='h-[30px] w-[80px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-center'
                  />
                  <input
                    type='text'
                    placeholder='Month'
                    className='h-[30px] w-[100px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-center'
                  />
                  <input
                    type='text'
                    placeholder='Day'
                    className='h-[30px] w-[60px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-center'
                  />
                </div>
              </div>

              <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                Place of Birth
                <input type='text' id='place_of_birth' className='ml-[] mt-[5px] h-[30px] w-[660px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
              </div>
            </div>

            <div className='flex flex-row'>
              <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                <label htmlFor="gender">Gender</label>
                <select id="gender" className='mt-[5px] h-[30px] w-[150px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className='flex flex-col ml-[30px] mt-[20px] font-serif'>
                <label htmlFor="civil_status">Civil Status</label>
                <select id="civil_status" className='mt-[5px] h-[30px] w-[250px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected></option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='flex flex-row'>
                <div className='flex items-center justify-between w-full mt-[97px]'>
                  <NavLink to='/application1' className='ml-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                    Back  
                  </NavLink>
                  <NavLink to='/application3' className='mr-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
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

export default Application2;
