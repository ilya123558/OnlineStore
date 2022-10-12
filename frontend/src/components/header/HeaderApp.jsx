import React, { useEffect, useState } from 'react';
import './HeaderApp.scss'
import logo from '../../images/header/logo.svg'
import { ReactComponent as Basket } from '../../images/header/basket.svg'
import { ReactComponent as Profile } from '../../images/header/profile.svg'
import { Link } from 'react-router-dom'
import Auth from '../../componentsAuth/Auth';
import { updateAuthVisible } from '../../redux/auth/auth';

import MyMenu from '../UI/menu/MyMenu';
import useSearch from '../../hooks/useSearch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const HeaderApp = () => {

    const dispatch = useDispatch()

    const [search, setSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const searchConst = useSearch(search, setSearch, searchValue, setSearchValue)
    const authVisible = useSelector(state => state.auth.authVisible)

    useEffect(() => {

    }, [searchValue])

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
                            {searchConst}
                            <div className="header__profile-wrapper">
                                {localStorage.getItem('auth') ?
                                    <Link to="/basket" >
                                        <Basket fill='transparent' className='basket' stroke='current' />
                                    </Link>
                                    :
                                    <Basket onClick={() => dispatch(updateAuthVisible(true))} fill='transparent' className='basket' stroke='current' />
                                }

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