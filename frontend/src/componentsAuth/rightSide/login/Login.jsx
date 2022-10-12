import React from 'react';
import s from './Login.module.scss'
import logo from '../../../images/auth/logo.png'
import MyInputPass from '../../UI/MyInputPass/MyInputPass';
import MyInput from '../../UI/MyInput/MyInput';
import MyButtonAuth from '../../UI/MyButtonAuth/MyButtonAuth';
import { updateTypeAuth } from '../../../redux/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginValue, updateLoginTypePassword, fetchLogin, updateLoginStatus } from '../../../redux/auth/login';
import { useEffect } from 'react';
import { updateAuthVisible } from '../../../redux/auth/auth';
import { resetPasswordValue } from '../../../redux/auth/password';

const Login = () => {

    const dispatch = useDispatch()
    const inputMass = useSelector(state => state.login.login)
    const error = useSelector(state => state.login.error) 
    const status = useSelector(state => state.login.status)

    const setInputMass = (elem, typeUpdate) => typeUpdate === 'password'
        ?
        dispatch(updateLoginTypePassword({ type: elem.type }))
        :
        dispatch(updateLoginValue({ title: elem.title, value: elem.value }))

    const onClickHandler = async () => {
        await dispatch(fetchLogin({
            email: inputMass[0].value,
            password: inputMass[1].value
        }))
    }

    useEffect(() => {
        if (status === 'resolve') {
            dispatch(updateAuthVisible(false))
            dispatch(updateLoginStatus('loading'))
        }

    }, [error, status, dispatch])

    return (
        <div className={s.authLogin}>
            <img className={s.logo} src={logo} alt="logo" />
            <h3 className={s.title}>Войти в личный кабинет</h3>
            {error &&
                <div className={s.error}>{error}</div>
            }
            <form className={s.form} onSubmit={e => e.preventDefault()}>
                {
                    inputMass.map((elem, index) => elem.placeholder === 'Введите пароль'
                        ?
                        <MyInputPass key={index} {...elem}
                            elem={elem}
                            setInputMass={setInputMass} />
                        :
                        <MyInput key={index} {...elem} setInputMass={setInputMass} />)
                }


                <MyButtonAuth onClickHandler={onClickHandler} >Войти</MyButtonAuth>
            </form>

            <div className={s.passBtnInner}>
                <button className={s.passBtn} onClick={() => {
                    dispatch(updateTypeAuth('Password'))
                    dispatch(resetPasswordValue('Password'))
                    }}>Забыли пароль?</button>
            </div>

        </div>
    );
};

export default Login;