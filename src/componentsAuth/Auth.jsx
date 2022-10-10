import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import s from './Auth.module.scss'
import { updateTypeAuth, updateAuthVisible } from '../redux/auth/auth';
import { resetLoginValue } from '../redux/auth/login';
import { resetNewPasswordValue } from '../redux/auth/newPassword';
import { resetPasswordValue } from '../redux/auth/password';
import { resetRegestrationValue } from '../redux/auth/regestration';

import AuthLeftSide from './leftSide/AuthLeftSide';
import AuthRightSide from './rightSide/AuthRightSide';

const Auth = () => {

    const dispatch = useDispatch()

    const ref = useRef()
    const onClickHandler = e => {
        for (let i in e.nativeEvent.path) {
            if (e.nativeEvent.path[i] === ref.current) {
                return dispatch(updateAuthVisible(true))
            }
        }
        dispatch(resetLoginValue())
        dispatch(resetNewPasswordValue())
        dispatch(resetPasswordValue())
        dispatch(resetRegestrationValue())
        dispatch(updateTypeAuth('Registration'))
        return dispatch(updateAuthVisible(false))
    }

    return (
        <div className={s.authInner} onClick={onClickHandler}>
            <div className={s.profileAuth} />
            <div ref={ref} className={s.auth} >
                <AuthLeftSide />
                <AuthRightSide />
            </div>

        </div>
    );
};

export default Auth;