import React, { useEffect } from 'react';
import s from './Password.module.scss'
import logo from '../../../images/auth/logo.png'
import MyInput from '../../UI/MyInput/MyInput';
import MyButtonAuth from '../../UI/MyButtonAuth/MyButtonAuth';
import { updateTypeAuth } from '../../../redux/auth/auth';
import { useDispatch } from 'react-redux';
import { updatePasswordValue, updatePasswordStatus } from '../../../redux/auth/password';
import { useSelector } from 'react-redux';
import { fetchPassword } from '../../../redux/auth/password';

const Password = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.password.password)
    const status = useSelector(state => state.password.status)
    const error = useSelector(state => state.password.error)

    const setInputMass = (elem) => {
        dispatch(updatePasswordValue({ title: elem.title, value: elem.value }))
    }

    const onClickHandler = async () => {
        await dispatch(fetchPassword({
            email: items[0].value,
        }))
    }

    useEffect(() => {
        if (status === 'resolve') {
            dispatch(updatePasswordStatus('loading'))
            dispatch(updateTypeAuth('NewPassword'))
        }
    }, [error, status, error, dispatch])

    return (
        <div className={s.authPassword}>
            <img className={s.logo} src={logo} alt="logo" />
            <h3 className={s.title}>Забыли пароль?</h3>
            <p className={s.subtitle}>Введите вашу почту для смены пароля</p>
            {error &&
                <div className={s.error}>{error}</div>
            }
            <form className={s.form} onSubmit={e => e.preventDefault()}>
                {items.map(elem => <MyInput key={elem.title} {...elem} setInputMass={setInputMass} />)}
                <MyButtonAuth onClickHandler={onClickHandler}>Сменить пароль</MyButtonAuth>
            </form>

            <div className={s.passBtnInner}>
                <button className={s.passBtn} onClick={() => dispatch(updateTypeAuth('Login'))}>Вернуться на страницу входа</button>
            </div>

        </div>
    );
};

export default Password;