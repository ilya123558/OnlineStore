import React from 'react';
import { useSelector } from 'react-redux';
import s from './AuthRightSide.module.scss'
import Login from './login/Login';
import NewPassword from './newPassword/NewPassword';
import Password from './password/Password';
import Registration from './registration/Registration';


const AuthRightSide = ({setProfileAuth}) => {

    const typeAuth = useSelector(state => state.auth.typeAuth)

    return (
        <div className={s.rightSide}>
            <div className={s.inner}>
                {typeAuth === 'Registration' &&
                    <Registration />
                }
                {typeAuth === 'Login' &&
                    <Login />
                }
                {typeAuth === 'Password' &&
                    <Password />
                }
                {typeAuth === 'NewPassword' &&
                    <NewPassword />
                }
            </div>
        </div>
    );
};

export default AuthRightSide;