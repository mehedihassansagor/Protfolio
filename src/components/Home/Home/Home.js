import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import MySkills from '../MySkills/MySkills';
import Project from '../Project/Project';
import './Home.css'

const Home = () => {
    return (
        <main>
            <Banner />
            <MySkills />
            <Project />
            <Blog />
            <ContactMe />
            <Footer />
        </main>
    );
};

export default Home;