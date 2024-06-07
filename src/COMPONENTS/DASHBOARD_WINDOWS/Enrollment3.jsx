import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, NavLink } from 'react-router-dom';

const Enrollment3 = () => {
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
              <h1>Enrollment Process 3/4:</h1>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px] mt-[20px]'>PERSONAL INFORMATION</h1>
            <div className='ml-[30px] mt-[20px] font-serif'>
              <div className='flex flex-row'>
                <div className='flex flex-col mr-[50px]'>
                  <div>#1 Enrollment Setup</div>
                </div>
                <div className='flex flex-col mr-[50px]'>
                  <div>#2 Advertising</div>
                </div>
                <div className='flex flex-col font-bold'>
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
            
            <div className = 'flex flex-row'>
              <div className = 'flex flex-col h-[270px] w-[300px] bg-[#D1DDED] ml-[15px] mt-[5px] rounded-[3px] font-serif items-center'>
                {/* Additional content can go here */}

                <label htmlFor="SubjectCode" className = 'mt-[10px]'>Subject Code</label>
                <input type="text" name="" id="" className = 'mt-[5px] w-[200px] font-bold rounded-[3px] font-serif boredr border-black border-[1px]'/>
                
                <label htmlFor="SAcademicProgram" className = 'mt-[10px]'>Academic Program</label>
                <input type="text" name="" id="" className = 'mt-[5px] w-[200px] font-bold rounded-[3px] font-serif boredr border-black border-[1px]'/>
                
                <label htmlFor="Curriculum" className = 'mt-[10px]'>Curriculum</label>
                <input type="text" name="" id="" className = 'mt-[5px] w-[200px] font-bold rounded-[3px] font-serif boredr border-black border-[1px]'/>
                
                <label htmlFor="Year Level" className = 'mt-[10px]'>Year Level</label>
                <input type="text" name="" id="" className = 'mt-[5px] w-[200px] font-bold rounded-[3px] font-serif boredr border-black border-[1px]'/>
                
                
              </div>

              <div className = 'flex h-[270px] w-[930px] bg-[#D1DDED] ml-[30px] mt-[5px] rounded-[3px] font-serif items-center'>
                {/* table content */}
                <table className='w-full bg-[#D1DDED] border-collapse'>
                  <thead>
                    <tr>
                      <th className='border border-black p-[8px] font-serif'>Subject</th>
                      <th className='border border-black p-[8px] font-serif'>Code</th>
                      <th className='border border-black p-[8px] font-serif'>Units</th>
                      <th className='border border-black p-[8px] font-serif'>Section</th>
                      <th className='border border-black p-[8px] font-serif'>Schedule</th>
                      <th className='border border-black p-[8px] font-serif'>Instructor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                      <td className='border border-black p-[8px] font-serif'>CS101</td>
                      <td className='border border-black p-[8px] font-serif'>3</td>
                      <td className='border border-black p-[8px] font-serif'>A1</td>
                      <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                      <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                    </tr>
                    <tr>
                      <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                      <td className='border border-black p-[8px] font-serif'>CS101</td>
                      <td className='border border-black p-[8px] font-serif'>3</td>
                      <td className='border border-black p-[8px] font-serif'>A1</td>
                      <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                      <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                    </tr>
                    <tr>
                      <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                      <td className='border border-black p-[8px] font-serif'>CS101</td>
                      <td className='border border-black p-[8px] font-serif'>3</td>
                      <td className='border border-black p-[8px] font-serif'>A1</td>
                      <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                      <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                    </tr>
                    <tr>
                      <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                      <td className='border border-black p-[8px] font-serif'>CS101</td>
                      <td className='border border-black p-[8px] font-serif'>3</td>
                      <td className='border border-black p-[8px] font-serif'>A1</td>
                      <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                      <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                    </tr>
                    <tr>
                      <td className='border border-black p-[8px] font-serif'>Introduction to Computer Science</td>
                      <td className='border border-black p-[8px] font-serif'>CS101</td>
                      <td className='border border-black p-[8px] font-serif'>3</td>
                      <td className='border border-black p-[8px] font-serif'>A1</td>
                      <td className='border border-black p-[8px] font-serif'>MWF 10:00-11:00</td>
                      <td className='border border-black p-[8px] font-serif'>Dr. Smith</td>
                    </tr>
                    {/* Additional rows can be added here */}
                  </tbody>
                </table>
              </div>
            </div>

            <div className='flex items-center justify-between w-full mt-[10px]'>
              <NavLink to='/dashboard/enrollment2' className='ml-[15px] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                Back  
              </NavLink>
              <NavLink to='/dashboard/enrollment4' className='mr-[15px] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                Proceed
              </NavLink>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  )
}

export default Enrollment3;
