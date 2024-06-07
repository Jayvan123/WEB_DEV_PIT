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

            <div className='flex h-[45px] w-[250px] bg-[#213A59] ml-[15px] mt-[15px] rounded-[5px] text-[20px] text-white font-serif items-center justify-center'>
              <h1>Enrollment Process 2/4:</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px] mt-[20px]'>PERSONAL INFORMATION</h1>
            <div className='ml-[30px] mt-[20px] font-serif'>
              <div className='flex flex-row'>
                <div className='flex flex-col mr-[50px]'>
                  <div>#1 Enrollment Setup</div>
                </div>
                <div className='flex flex-col mr-[50px] font-bold'>
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
              
            <div className='flex flex-row items-center'>
              <label htmlFor="academicyearterm" className='ml-[400px] mt-[20px] font-serif w-[200px] text-right pr-[10px] font-bold'>Class Section</label>
              <select id="academicyearterm" className='mt-[18px] h-[30px] w-[110px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans'>
                <option value="" disabled selected></option>
                <option value="2024-1st-Semester">Option</option>
                <option value="2024-2nd-Semester">Option</option>
                <option value="2025-1st-Semester">Option</option>
                <option value="2025-2nd-Semester">Option</option>
              </select>
            </div>

            <div className='mt-[20px] mx-[30px]'>
              <table className='w-full bg-[#D1DDED] border-collapse'>
                <thead>
                  <tr>
                    <th className='border border-black p-[8px] font-serif'>Subject Code</th>
                    <th className='border border-black p-[8px] font-serif'>Subject</th>
                    <th className='border border-black p-[8px] font-serif'>Units</th>
                    <th className='border border-black p-[8px] font-serif'>Section</th>
                    <th className='border border-black p-[8px] font-serif'>Schedule</th>
                    <th className='border border-black p-[8px] font-serif'>Faculty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-black p-[8px] font-serif'>CS101</td>
                    <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                    <td className='border border-black p-[8px] font-serif'>3</td>
                    <td className='border border-black p-[8px] font-serif'>A1</td>
                    <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                    <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                  </tr>
                  <tr>
                    <td className='border border-black p-[8px] font-serif'>CS101</td>
                    <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                    <td className='border border-black p-[8px] font-serif'>3</td>
                    <td className='border border-black p-[8px] font-serif'>A1</td>
                    <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                    <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                  </tr>
                  <tr>
                    <td className='border border-black p-[8px] font-serif'>CS101</td>
                    <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                    <td className='border border-black p-[8px] font-serif'>3</td>
                    <td className='border border-black p-[8px] font-serif'>A1</td>
                    <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                    <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>

            <div className='flex items-center justify-between w-full mt-[55px]'>
              <NavLink to='/dashboard/enrollment1' className='ml-[15px] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                Back  
              </NavLink>
              <NavLink to='/dashboard/enrollment3' className='mr-[15px] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                Proceed
              </NavLink>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default Enrollment2;
