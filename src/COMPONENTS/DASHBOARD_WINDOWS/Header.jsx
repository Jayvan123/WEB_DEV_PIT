import React from 'react'
import { NavLink } from 'react-router-dom';
import logo_img from '../../IMAGES/logo-school.png';

const Header = () => {
  return (
    <div className='h-[90px] bg-[#072F5F] text-white flex items-center'>
      <div className='h-[90px] w-[90px] ml-[10px]'>
        <img src={logo_img} alt="" className='object-cover'/>
      </div>
      <div className='flex ml-[20px] text-white text-[20px] font-serif'>
        JMHTech Institute: Empowering Tomorrows Innovators
      </div>
    </div>
  )
}

export default Header