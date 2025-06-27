import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Education from '../components/Eductaion';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div className=''>  
            <section className='my-5 ' >
                <AboutMe></AboutMe>
            </section>

            <section className='my-5 '>
                <Skills></Skills>
            </section>

            <section className='my-5 '>
                <Education></Education>
            </section>

            <section className='my-5 '>
                <Projects></Projects>
            </section>
        </div>
    );
};

export default Home;