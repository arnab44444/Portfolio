import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className=''>
                <Navbar></Navbar>

                <Hero></Hero>
            </header>

            <main className="container  mx-auto px-4 md:px-5 lg:px-10">
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;