import React, { useEffect } from 'react';
import MyInputPass from '../../UI/MyInputPass/MyInputPass';
import s from './NewPassword.module.scss'
import logo from '../../../images/auth/logo.png'
import MyButtonAuth from '../../UI/MyButtonAuth/MyButtonAuth';
import { useDispatch, useSelector } from 'react-redux';
import { updateNewPasswordValue, updateNewPasswordTypePassword, fetchNewPassword, updateNewPasswordStatus } from '../../../redux/auth/newPassword';
import { updateTypeAuth } from '../../../redux/auth/auth';
import { resetLoginValue } from '../../../redux/auth/login';

const NewPassword = () => {

    const dispatch = useDispatch()
    const password = useSelector(state => state.newPassword.newPassword)
    const email = useSelector(state => state.password.password)
    const status = useSelector(state => state.newPassword.status)

    const setInputMass = (elem, typeUpdate) => typeUpdate === 'password'
        ?
        dispatch(updateNewPasswordTypePassword({ type: elem.type }))
        :
        dispatch(updateNewPasswordValue({ title: elem.title, value: elem.value }))


    const onClickHandler = async () => {
        await dispatch(fetchNewPassword({
            email: email[0].value,
            password: password[0].value,
        }))
    }

    useEffect(() => {
        if (status === 'resolve') {
            dispatch(updateNewPasswordStatus('loading'))
            dispatch(updateTypeAuth('Login'))
            dispatch(resetLoginValue())
        }
    }, [status, dispatch])

    return (
        <div className={s.authPassword}>
            <img className={s.logo} src={logo} alt="logo" />
            <h3 className={s.title}>Забыли пароль?</h3>
            <p className={s.subtitle}>Введите новый пароль</p>
            <form className={s.form} onSubmit={e => e.preventDefault()}>
                {password.map(elem => <MyInputPass key={elem} {...elem}
                    elem={elem}
                    setInputMass={setInputMass} />)
                }
                <MyButtonAuth onClickHandler={onClickHandler}>Обновить пароль</MyButtonAuth>
            </form>

        </div>
    );
};

export default NewPassword;