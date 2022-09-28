import React from 'react';
import { useEffect } from 'react';
import s from './Auth.module.scss'

import AuthLeftSide from './leftSide/AuthLeftSide';
import AuthRightSide from './rightSide/AuthRightSide';

const Auth = ({ setProfileAuth }) => {

    useEffect(() => {
    }, [])

    const onClickHandler = e => e.target.offsetParent ? setProfileAuth(false) : setProfileAuth(true)

    return (
        <div className={s.authInner} onClick={onClickHandler}>
            <div className={s.profileAuth} />
            <div className={s.auth} >
                <AuthLeftSide/>
                <AuthRightSide/>
            </div>

        </div>
    );
};

export default Auth;