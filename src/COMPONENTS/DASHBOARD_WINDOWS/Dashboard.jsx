import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import notifications_logo from '../../IMAGES/IMAGES_DASHBOARD/notifications-logo.png'; 
import enrollment_logo from '../../IMAGES/IMAGES_DASHBOARD/enrollment-logo.png';
import getsomehelp_logo from '../../IMAGES/IMAGES_DASHBOARD/getsomehelp-logo.png'; 
import grades_logo from '../../IMAGES/IMAGES_DASHBOARD/grades-logo.png';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>

          <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
            <h1 className='ml-[10px]'>Welcome Back, User</h1>
          </div>
          <div className='h-[520px] w-[1290px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px] p-[50px]'>
            
            <div className='flex flex-wrap'>

              <div className='flex flex-col items-center justify-center h-[200px] w-[400px] bg-[#758AA5] rounded-[5px] mb-[20px]'>
                <img src={notifications_logo} alt="Notifications Logo" className="w-[60px] h-[60px]" />
                <p className='text-lg font-bold text-white'>NOTIFICATIONS</p>
                <p className='text-white'>See All</p>
              </div>

              <div className='flex flex-col items-center justify-center h-[200px] w-[200px] bg-[#FF3131] rounded-[5px] mb-[20px] ml-[40px]'>
                <img src={enrollment_logo} alt="Enrollment Logo" className="w-[60px] h-[60px]" />
                <p className='text-lg font-bold text-white'>ENROLLMENT</p>
                {/* <p className='text-white'>See All</p> */}
              </div>

              <div className='flex flex-col items-center justify-center h-[200px] w-[200px] bg-[#1E90FF] rounded-[5px] mb-[20px] ml-[40px]'>
                <img src={grades_logo} alt="Grades Logo" className="w-[60px] h-[60px]" />
                <p className='text-lg font-bold text-white'>GRADES</p>
                {/* <p className='text-white'>See All</p> */}
              </div>

              <div className='flex flex-col items-center justify-center h-[200px] w-[400px] bg-[#E26A6A] rounded-[5px] mt-[20px]'>
                <img src={getsomehelp_logo} alt="Get Some Help Logo" className="w-[60px] h-[60px]" />
                <p className='text-lg font-bold text-white'>GET SOME HELP</p>
                <p className='text-white'>See All</p>
              </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
