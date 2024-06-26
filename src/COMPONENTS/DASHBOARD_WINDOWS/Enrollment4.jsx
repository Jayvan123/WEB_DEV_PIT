import Header from './Header';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';

export const Enrollment4 = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>
          <div className='flex h-[40px] bg-[#D1DDED] rounded-[5px] mb-[10px] font-serif items-center'>
            {/* Header Content */}
          </div>

          <div className='h-[520px] w-[1290px] bg-[#FFFFFF] rounded-[5px] border-solid border-black border-[1px]'>
            {/* Enrollment Content */}
            <div className='flex h-[45px] w-[250px] bg-[#213A59] ml-[15px] mt-[15px] rounded-[5px] text-[20px] text-white font-serif items-center justify-center'>
              <h1>Enrollment Process 4/4:</h1>
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
                <div className='flex flex-col'>
                  <div>#3 Confirmation</div>
                </div>
                <div className='flex flex-col mr-[50px] ml-[50px] font-bold'>
                  <div>#4 Enrolled</div>
                </div>
              </div>
            </div>
            <h1 className='text-[20px] font-serif ml-[15px]'>
              __________________________________________________________________________________________________
            </h1>

            <div className='flex flex-col h-[100px] w-[400px] bg-[#D1DDED] mx-auto mt-[40px] rounded-[3px] font-serif items-center justify-center'>
                 YOU ARE NOW OFFICIALLY ENROLLED!
            </div>


            <div className='flex items-center justify-between w-full mt-[150px]'>
              {/* <NavLink to='/dashboard/enrollment3' className='ml-[15px] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                Back
              </NavLink> */}
              <NavLink to='/dashboard' className=' ml-[1180px] mr-[] mt-[] font-sans text-white text-[15px] font-bold bg-[#3784DC] h-[35px] w-[90px] rounded-[3px] flex items-center justify-center'>
                Proceed
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enrollment4;
