import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import Header from './Header';
import Sidebar from './Sidebar';

const StudentInfo = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>
          <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
          </div>

          <div className='h-[520px] w-[1290px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px] p-[20px]'>
            <div className='text-center mb-[7px] font-serif'>
              <h1 className = 'font-bold text-[20px]'>Student Information</h1>
              <h1>__________________________________________________________________________________________________________________________</h1>
            </div>

            <div className='flex flex-col items-center font-serif'>
              {/* Name Fields */}
              <div className='flex flex-row mb-[20px] w-full justify-between'>
                <div className='flex flex-col mr-[10px]'>
                  <label htmlFor='lastname'>Last Name</label>
                  <input type='text' id='lastname' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col mr-[10px]'>
                  <label htmlFor='firstname'>First Name</label>
                  <input type='text' id='firstname' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='middlename'>Middle Name</label>
                  <input type='text' id='middlename' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
              </div>

              {/* Additional Information */}
              <div className='flex flex-row mb-[20px] w-full justify-between'>
                <div className='flex flex-col mr-[10px]'>
                  <label htmlFor='extendedname'>Extended Name</label>
                  <input type='text' id='extendedname' className='mt-[5px] h-[30px] w-[155px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col mr-[10x]'>
                  <label htmlFor='gender'>Gender</label>
                  <input type='text' id='gender' className='mt-[5px] h-[30px] w-[155px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col mr-[51px]'>
                  <label htmlFor='dob'>Date of Birth</label>
                  <input type='text' id='dob' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='pob'>Place of Birth</label>
                  <input type='text' id='pob' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
              </div>

              {/* Personal Details */}
              <div className='flex flex-row mb-[20px] w-full justify-between'>
                <div className='flex flex-col mr-[10px]'>
                  <label htmlFor='civilstatus'>Civil Status</label>
                  <input type='text' id='civilstatus' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col mr-[10px]'>
                  <label htmlFor='nationality'>Nationality</label>
                  <input type='text' id='nationality' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='religion'>Religion</label>
                  <input type='text' id='religion' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
              </div>

              {/* Contact Information */}
              <div className='flex flex-row mb-[20px] w-full justify-between'>
                <div className='flex flex-col mr-[10px]'>
                  <label htmlFor='email'>Email Address</label>
                  <input type='text' id='email' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='contact'>Contact Number</label>
                  <input type='text' id='contact' className='mt-[5px] h-[30px] w-[340px] bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
                </div>
              </div>

              {/* Full Address */}
              <div className='flex flex-col mb-[20px] w-full'>
                <label htmlFor='address'>Full Address (Province/Region, Municipality / City, Barangay, Zip Code)</label>
                <input type='text' id='address' className='mt-[5px] h-[30px] w-full bg-[#D1DDED] border-solid border-black border-[1px] rounded-[3px] font-sans text-justify' />
              </div>

              {/* Edit Info Button */}
              <div className='flex items-center justify-between w-full mt-[20]'>
                <NavLink 
                  to='/' className='font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center ml-auto mr-[15px]'>
                    Edit Info
                </NavLink>
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;