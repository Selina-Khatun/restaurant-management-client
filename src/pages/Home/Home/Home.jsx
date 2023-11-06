import React from 'react';
import Banner from '../Banner/Banner';
import DailyMenus from '../DailyMenus/Dailymenus';
import AboutAs from '../AboutUs/AboutAs';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <DailyMenus></DailyMenus>
            <AboutAs></AboutAs>
        </div>
    );
};

export default Home;