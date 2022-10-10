import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUser, fetchUserUpdate } from '../../redux/user/user';
import UserButton from '../UI/UserButton/UserButton';
import s from './ProfileUserLeft.module.scss'

const ProfileUserLeft = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const status = useSelector(state => state.user.status)

    const [passVisible, setPassVisible] = useState(false)
    const [toggle, setToggle] = useState(false)

    const [items, setItems] = useState([
        { value: user.email, className: s.email },
        { value: user.phone, className: s.phone },
        { value: user.password, className: s.password },
    ])


    useEffect(() => {
        dispatch(fetchUser())
        setItems([
            { value: user.email, className: s.email },
            { value: user.phone, className: s.phone },
            { value: user.password, className: s.password },
        ])
    }, [dispatch, user.email, user.password, user.phone])

    const onClickHandler = () => {
        if (toggle) {
            dispatch(fetchUserUpdate({
                ...user,
                email: items[0].value,
                phone: items[1].value,
                password: items[2].value
            }))
            setToggle(!toggle)
        }
        else {
            setToggle(!toggle)
        }

    }

    return (
        <div className={s.inner}>
            {status === 'resolve' ?
                <>
                    <div className={s.editInner}>
                        <img className={s.profileImage} src="/images/catalog/users/userIcon.jpg" alt="profileImage" />
                        <UserButton onClickHandler={onClickHandler}>{toggle ? 'Сохранить' : 'Изменить'}</UserButton>
                    </div>

                    <div className={s.profileUserInfo}>
                        <h3 className={s.name}>{user.name}, здравствуйте!</h3>
                        {toggle
                            ?
                            items.map((elem, index) => index === 2 ?
                                <input
                                    key={index}
                                    value={elem.value}
                                    className={elem.className}
                                    type={passVisible ? 'text' : 'password'}
                                    onChange={e => setItems(
                                        items.map((item, indexItem) => indexItem === index ? { ...item, value: e.target.value } : item)
                                    )}
                                />
                                :
                                <input
                                    key={index}
                                    value={elem.value}
                                    className={elem.className}
                                    onChange={e => setItems(
                                        items.map((item, indexItem) => indexItem === index ? { ...item, value: e.target.value } : item)
                                    )}
                                />)
                            :
                            items.map((elem, i) => i === 2
                                ?
                                <p key={elem.className} className={elem.className}>{[...user.password.split('')].map(() => '*')}</p>
                                :
                                <p key={elem.className} className={elem.className}>{elem.value}</p>)
                        }
                        <div className={s.passText}>Пароль:</div>
                        {toggle &&
                            <svg className={s.svgItem} onClick={() => { setPassVisible(!passVisible) }} width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5C1 5 2.81818 1 6 1C9.18182 1 11 5 11 5C11 5 9.18182 9 6 9C2.81818 9 1 5 1 5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6.5C6.75312 6.5 7.36364 5.82843 7.36364 5C7.36364 4.17157 6.75312 3.5 6 3.5C5.24688 3.5 4.63636 4.17157 4.63636 5C4.63636 5.82843 5.24688 6.5 6 6.5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }

                    </div>
                </>
                :
                <div>loading...</div>
            }

        </div>
    );
};

export default ProfileUserLeft;