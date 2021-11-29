import React from 'react';
import Footer from '../Shared/Footer';
import About from './About/About';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import "./Home.css"

const Home = () => {
    return (
        <div className="background">
            <Banner></Banner>
            <About></About>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;