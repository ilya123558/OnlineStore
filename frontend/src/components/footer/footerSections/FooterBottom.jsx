import React from 'react';
import MyMenu from '../../UI/menu/MyMenu';
import './FooterBottom.scss'
import logo from '../../../images/header/logo.svg'
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="footer-bottom__logo">
            <Link to="/"><img src={logo} alt="logo" className="logo"></img></Link>
            </div>
            <MyMenu/>
        </div>
    );
};

export default FooterBottom;