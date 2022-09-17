import React, { useEffect } from 'react';
import '../styles/App.scss'
import '../styles/vars.scss'
import '../styles/settings.scss'
import SectionTop from '../components/sectionTop/SectionTop';
import SectionCatalog from '../components/sectionCatalog/SectionCatalog';
import SectionDiscount from '../components/sectionDiscount/SectionDiscount';
import SectionAbout from '../components/sectionAbout/SectionAbout';
import SectionInfo from '../components/sectionInfo/SectionInfo';
import SectionNews from '../components/sectionNews/SectionNews';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {

    useEffect(() => window.scroll(0, 0), [])


    return (
        <div className='App'>
            <SectionTop />
            <SectionCatalog />
            <SectionDiscount />
            <SectionAbout />
            <SectionInfo />
            <SectionNews />
        </div>
    );
};

export default HomePage;

