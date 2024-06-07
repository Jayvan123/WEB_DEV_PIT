import React from 'react';
import { NavLink } from 'react-router-dom';
import bg_img from '../../IMAGES/IMAGES_LOGINWINDOW/bg-window.png';

const About = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex-row justify-center ml-[100px] mt-[40px] h-[600px] w-[600px] bg-[#213A59] rounded-[10px]'>
        <div className='flex flex-col items-center'>
          <h1 className='font-sans font-bold text-white text-[20px] mt-[80px]'>About JMHTech Institute</h1>
          <p className='font-sans text-white text-[15px] text-center mt-[50px] w-[75%]'>
            JMHTech Institute, founded in 2010, fosters a vibrant community of passionate IT learners. Nestled in the heart of Cagayan de Oro, Philippines, we offer a rigorous curriculum designed to equip students with the latest technological expertise and industry-relevant skills. Through a blend of theoretical knowledge and practical application, JMHTech Institute empowers its students to become the next generation of IT leaders and innovators, shaping the future of technology.
          </p>
        </div>
        <div className='flex flex-col'>
          <NavLink to="/" className='font-sans font-bold text-white text-[15px] ml-[25px] mt-[215px]'>
            Back
          </NavLink>
        </div>
      </div>
      <div className='ml-[90px] mt-[] h-[680px] w-[700px] rounded-[10px] overflow-hidden'>
        <img src={bg_img} alt="" className='object-cover w-full h-full'/>
      </div>
    </div>
  );
}

export default About;
