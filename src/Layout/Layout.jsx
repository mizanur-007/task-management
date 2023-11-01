import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;