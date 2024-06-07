import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <div className='flex-1 bg-[#f0f0f0] p-[20px]'>
          <Outlet /> {/* This will render the nested routes */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
