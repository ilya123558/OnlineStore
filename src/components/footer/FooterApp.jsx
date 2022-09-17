import React from 'react';
import MyCoffee from '../UI/coffee/MyCoffee';
import './FooterApp.scss'
import FooterBottom from './footerSections/FooterBottom';
import FooterTop from './footerSections/FooterTop';


const FooterApp = () => {
    return (
        <footer className="footer">
            <MyCoffee className='footer-cofe'/>
            <div className="container">
                <FooterTop />

                <FooterBottom />
            </div>
        </footer>
    );
};

export default FooterApp;