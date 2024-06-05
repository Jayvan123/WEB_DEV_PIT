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
              <h1>Please complete the form for your application:</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px] mt-[20px]'>APPLYING FOR</h1>
            <h1 className='text-[20px] font-serif ml-[15px]'>
              __________________________________________________________________________________________________________
            </h1>
            <div className='flex flex-col'>
              <div className='flex flex-row items-center'>
                <label htmlFor="academic_year" className='ml-[100px] mt-[20px] font-serif'>Academic Year And Term</label>
                <select id="academic_year" className='ml-[10px] mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" disabled selected></option>
                  <option value="2024-1st-Semester">2024 1st Semester</option>
                  <option value="2024-2nd-Semester">2024 2nd Semester</option>
                  <option value="2025-1st-Semester">2025 1st Semester</option>
                  <option value="2025-2nd-Semester">2025 2nd Semester</option>
                </select>
              </div>

              <div className='flex flex-row items-center'>
                <label htmlFor="department" className='ml-[195px] mt-[20px] font-serif'>Department</label>
                <select id="department" className='ml-[10px] mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" disabled selected></option>
                  <option value="College-Of-Computer-Studies">College Of Computer Studies</option>
                  <option value="College-of-Engineering-and-Architecture">College of Engineering and Architecture</option>
                  <option value="College-of-Technology">College of Technology</option>
                </select>
              </div>

              <div className='flex flex-row items-center'>
                <label htmlFor="academic_year_2" className='ml-[155px] mt-[20px] font-serif'>Program / Course</label>
                <select id="academic_year_2" className='ml-[10px] mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" disabled selected></option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>

              <div className='flex flex-row'>
                <div className='flex items-center justify-between w-full mt-[190px]'>
                  <NavLink to='/' className='ml-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                    Back  
                  </NavLink>
                  <NavLink to='/application2' className='mr-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
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
