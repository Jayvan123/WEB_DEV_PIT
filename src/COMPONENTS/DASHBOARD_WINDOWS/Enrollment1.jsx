import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Enrollment1 = () => {
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

            <div className='flex h-[45px] w-[250px] bg-[#213A59] ml-[15px] mt-[15px] rounded-[5px] text-[20px] text-white font-serif items-center justify-center'>
              <h1>Enrollment Process 1/4:</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px] mt-[20px]'>PERSONAL INFORMATION</h1>
            <div className='ml-[30px] mt-[20px] font-serif'>
              <div className='flex flex-row'>
                <div className='flex flex-col mr-[50px] font-bold'>
                  <div>#1 Enrollment Setup</div>
                </div>
                <div className='flex flex-col mr-[50px]'>
                  <div>#2 Advertising</div>
                </div>
                <div className='flex flex-col'>
                  <div>#3 Confirmation</div>
                </div>
                <div className='flex flex-col mr-[50px] ml-[50px]'>
                  <div>#4 Enrolled</div>
                </div>
              </div>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px]'>
              __________________________________________________________________________________________________
            </h1>

            <div className='flex flex-col'>
              {/* Academic Year And Term */}
              <div className='flex flex-row items-center'>
                <label htmlFor="academicyearterm" className='ml-[100px] mt-[20px] font-serif w-[200px] text-right pr-[10px]'>Academic Year And Term</label>
                <select id="academicyearterm" className='mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected>-- Select an option --</option>
                  <option value="2024-1st-Semester">2024 1st Semester</option>
                  <option value="2024-2nd-Semester">2024 2nd Semester</option>
                  <option value="2025-1st-Semester">2025 1st Semester</option>
                  <option value="2025-2nd-Semester">2025 2nd Semester</option>
                </select>
              </div>

              {/* Academic Program */}
              <div className='flex flex-row items-center'>
                <label htmlFor="acadprog" className='ml-[100px] mt-[20px] font-serif w-[200px] text-right pr-[10px]'>Academic Program</label>
                <select id="acadprog" className='mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected>-- Select an option --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>

              {/* Curriculum */}
              <div className='flex flex-row items-center'>
                <label htmlFor="curriculum" className='ml-[100px] mt-[20px] font-serif w-[200px] text-right pr-[10px]'>Curriculum</label>
                <select id="curriculum" className='mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected>-- Select an option --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>

              {/* Current Year Level */}
              <div className='flex flex-row items-center'>
                <label htmlFor="curryrlvl" className='ml-[100px] mt-[20px] font-serif w-[200px] text-right pr-[10px]'>Current Year Level</label>
                <select id="curryrlvl" className='mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected>-- Select an option --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>

              {/* Status */}
              <div className='flex flex-row items-center'>
                <label htmlFor="status" className='ml-[100px] mt-[20px] font-serif w-[200px] text-right pr-[10px]'>Status</label>
                <select id="status" className='mt-[18px] h-[30px] w-[400px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                  <option value="" selected>-- Select an option --</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
            </div>
              
            <div className = ''>
                <NavLink to='/dashboard/enrollment2' className='ml-[1180px] mt-[50px] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                    Proceed 
                </NavLink>
            </div>

            
          </div>

        </div>

      </div>
    </div>
  );
}

export default Enrollment1;