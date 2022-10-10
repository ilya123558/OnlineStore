import React from 'react';
import s from './Registration.module.scss'
import logo from '../../../images/auth/logo.png'
import MyInput from '../../UI/MyInput/MyInput';
import MyInputPass from '../../UI/MyInputPass/MyInputPass';
import MyButtonAuth from '../../UI/MyButtonAuth/MyButtonAuth';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateRegestrationValue, updateRegestrationTypePassword, fetchRegestration, updateRegestrationStatus } from '../../../redux/auth/regestration';
import { useEffect } from 'react';
import { updateTypeAuth } from '../../../redux/auth/auth';

const Registration = () => {

    const dispatch = useDispatch()
    const inputMass = useSelector(state => state.regestration.regestration)
    const status = useSelector(state => state.regestration.status)
    const error = useSelector(state => state.regestration.error)

    const setInputMass = (elem, typeUpdate) => typeUpdate === 'password'
        ?
        dispatch(updateRegestrationTypePassword({ type: elem.type }))
        :
        dispatch(updateRegestrationValue({ title: elem.title, value: elem.value }))

    const onClickHandler = async () => {
        await dispatch(fetchRegestration({
            name: inputMass[0].value,
            email: inputMass[1].value,
            phone: inputMass[2].value,
            password: inputMass[3].value
        }))
    }

    useEffect(() => {
        if (status === 'resolve') {
            dispatch(updateTypeAuth('Login'))
            dispatch(updateRegestrationStatus('loading'))
        }

    }, [dispatch, status, error])


    return (
        <div className={s.authReg}>
            <img src={logo} alt="logo" />
            <h3 className={s.title}>Регистрация</h3>
            <p className={s.subtitle}>
                Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!
            </p>
            {error &&
                <div className={s.error}>{error}</div>
            }
            <form className={s.form} onSubmit={e => e.preventDefault()}>
                {
                    inputMass.map((elem, index) => elem.title === 'Password'
                        ?
                        <MyInputPass key={index} {...elem}
                            elem={elem}
                            setInputMass={setInputMass} />
                        :
                        <MyInput key={index} {...elem} setInputMass={setInputMass} />)
                }

                <MyButtonAuth onClickHandler={onClickHandler}>Зарегистрироваться</MyButtonAuth>
            </form>

        </div>
    );
};

export default Registration;