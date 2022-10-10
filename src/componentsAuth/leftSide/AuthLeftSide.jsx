import React from 'react';
import s from './AuthLeftSide.module.scss'
import coffee from '../../images/auth/coffee.png'
import cup from '../../images/auth/cup.png'
import { useDispatch, useSelector } from 'react-redux';
import { updateTypeAuth } from '../../redux/auth/auth';
import { resetLoginValue } from '../../redux/auth/login';
import { resetRegestrationValue } from '../../redux/auth/regestration';

const AuthLeftSide = () => {

    const dispatch = useDispatch()
    const typeAuth = useSelector(state => state.auth.typeAuth)

    const onClickHandler = (type) => {
        dispatch(updateTypeAuth(type))
        dispatch(resetLoginValue())
        dispatch(resetRegestrationValue())
    }

    return (
        <div className={s.leftSide}>
            <div className={s.imgInner}>
                <img className={s.coffee} src={coffee} alt="coffee" />
                <img className={s.cup} src={cup} alt="cup" />
            </div>
            {
                typeAuth === 'Registration'
                    ?
                    <div className={s.textInner}>
                        <h3 className={s.title}>Добро пожаловать!</h3>
                        <button className={s.btn} onClick={() => onClickHandler('Login')} >Уже есть аккаунт?</button>
                    </div>
                    :
                    <div className={s.textInner}>
                        <h3 className={s.title}>Регистрация</h3>
                        <p className={s.subtitle}>Получайте скидки первыми!</p>
                        <button className={s.regBtn} onClick={() => onClickHandler('Registration')} >Зарегистрироваться</button>
                    </div>
            }

        </div>
    );
};

export default AuthLeftSide;