import React, { useState } from 'react';
import './HeaderApp.scss'
import logo from '../../images/header/logo.svg'
import { ReactComponent as Basket } from '../../images/header/basket.svg'
import { ReactComponent as Profile } from '../../images/header/profile.svg'
import { Link } from 'react-router-dom'

import MyMenu from '../UI/menu/MyMenu';
import useSerch from '../../hooks/useSerch';

const HeaderApp = () => {
    const [serch, setSerch] = useState(false)
    const [serchValue, setSerchValue] = useState('')
    const serchConst = useSerch(serch, setSerch, setSerchValue)

    // ---------------serchValue-----------------
    // В этой переменной значение поиска
    const temp = () => {
        console.log(serchValue)
    }
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo__inner">
                        <a href="/"><img src={logo} alt="logo" className="logo"></img></a>
                    </div>
                    <MyMenu />
                    <div className="header__profile-items">
                        {serchConst}
                        <div className="header__profile-wrapper">
                            <Link to="/basket" >
                                <Basket fill='transparent' className='basket' stroke='current' />
                            </Link>
                        </div>
                        <div onClick={() => temp()} className="header__profile-wrapper">
                            <Link to="/profile" >
                                <Profile fill='transparent' className='profile' stroke='current' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderApp;