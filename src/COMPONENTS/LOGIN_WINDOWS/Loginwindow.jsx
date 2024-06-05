import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import bg_img from '../../IMAGES/bg-window.png';


const Loginwindow = () => {

  return (
    <div className='flex flex-row'> 
        <div className='flex-row ml-[100px] mt-[40px] h-[600px] w-[600px] bg-[#213A59] rounded-[10px]'>

            <div className='text-white flex text ml-[60px] mt-[90px] text-[40px] font-sans'>
                Welcome Back 
            </div>

            <div className='text-white flex text ml-[60px] mt-[2px] font-thin'>
                Welcome back! Login your Account 
            </div>

            <label htmlFor="username" className='text-white flex text ml-[60px] mt-[15px] font-thin'>
                Username
            </label>
            <input type="text" id="username" className='flex text text-white font-thin w-[350px] ml-[60px] mt-[5px]
                bg-[#072F5F] rounded-[3px] border-solid border-[1px] border-white'/>

            <label htmlFor="password" className='text-white flex text ml-[60px] mt-[15px] font-thin'>
                Password
            </label>
            <input type="password" id="password" className='flex text text-white font-thin w-[350px] ml-[60px] mt-[5px]
                bg-[#072F5F] rounded-[3px] border-solid border-[1px] border-white'/>

            <div className='flex ml-[60px] mt-[15px]'>
                <input type="checkbox" id="rememberMe" className='mr-[5px]'/>
                <label htmlFor="rememberMe" className='font-thin text-white text-[10px]'>Remember Me</label>
                <label htmlFor="forgetPassword" className='font-thin text-white ml-[150px] text-[10px]'>Forgot Password? Click Here</label>
            </div>

            <div>
                <button className='text-white text-[12px] font-sans w-[350px] h-[30px] ml-[60px] mt-[10px]  
                                bg-[#3784DC] rounded-[3px] border-solid border-[1px] border-white'>LOG IN</button>
            </div>

            <div>
                <NavLink to="/application1" className="flex text-white text-[12px] ml-[160px] mt-[30px] font-sans">
                    NOT A STUDENT? CLICK HERE
                </NavLink>
            </div>

            <div className='flex'>
                <NavLink to="/about" className='flex flex-text text-white text-[15px] ml-[25px] mt-[120px] font-bold font-sans'>
                    About
                </NavLink>
                <NavLink to="/requirements" className='flex flex-text text-white text-[15px] ml-[400px] mt-[120px] font-bold font-sans'>
                    Requirements
                </NavLink>
            </div>
        </div>

        <div className='ml-[90px] h-[680px] w-[700px] rounded-[10px] overflow-hidden'>
            <img src={bg_img} alt="" className='object-cover w-full h-full'/>
        </div>

    </div>
    
  )
}

export default Loginwindow