import React, { useEffect, useState } from 'react';
import './HeaderApp.scss'
import logo from '../../images/header/logo.svg'
import { ReactComponent as Basket } from '../../images/header/basket.svg'
import { ReactComponent as Profile } from '../../images/header/profile.svg'
import { Link } from 'react-router-dom'
import Auth from '../../componentsAuth/Auth';
import { updateAuthVisible } from '../../redux/auth/auth';

import MyMenu from '../UI/menu/MyMenu';
import useSerch from '../../hooks/useSerch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const HeaderApp = () => {

    const dispatch = useDispatch()

    const [serch, setSerch] = useState(false)
    const [serchValue, setSerchValue] = useState('')
    const serchConst = useSerch(serch, setSerch, serchValue, setSerchValue)
    const authVisible = useSelector(state => state.auth.authVisible)

    useEffect(() => {
        
    }, [serchValue])

    return (
        <>
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
                            <div className="header__profile-wrapper">
                                {localStorage.getItem('auth') ?
                                    <Link to="/profile" >
                                        <Profile fill='transparent' className='profile profile__active' stroke='current' />
                                    </Link>
                                    :
                                    <Profile onClick={() => dispatch(updateAuthVisible(true))} fill='transparent' className='profile' stroke='current' />
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {authVisible ? <Auth /> : <></>}
        </>
    );
};

export default HeaderApp;