import React from 'react';
import s from './AuthRightSide.module.scss'
import logo from '../../images/auth/logo.png'
import MyInput from '../UI/MyInput/MyInput';

const AuthRightSide = () => {
    return (
        <div className={s.rightSide}>
            <div className={s.inner}>

                <div className={s.authReg}>
                    <img src={logo} alt="logo" />
                    <h3 className={s.title}>Регистрация</h3>
                    <p className={s.subtitle}>
                        Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!
                    </p>
                    <MyInput placeholder={'Имя и фамилия'}/>
                </div>
 
            </div>
        </div>
    );
};

export default AuthRightSide;