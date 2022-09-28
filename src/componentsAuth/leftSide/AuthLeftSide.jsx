import React from 'react';
import s from './AuthLeftSide.module.scss'
import coffee from '../../images/auth/coffee.png'
import cup from '../../images/auth/cup.png'

const AuthLeftSide = () => {
    return (
        <div className={s.leftSide}>
            <div className={s.imgInner}>
                <img className={s.coffee} src={coffee} alt="coffee" />
                <img className={s.cup} src={cup} alt="cup" />
            </div>
            <div className={s.textInner}>
                <h3 className={s.title}>Добро пожаловать!</h3>
                <button className={s.btn}>Уже есть аккаунт?</button>
            </div>
        </div>
    );
};

export default AuthLeftSide;