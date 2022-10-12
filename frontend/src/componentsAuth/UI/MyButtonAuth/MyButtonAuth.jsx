import React from 'react';
import s from './MyButtonAuth.module.scss'

const MyButtonAuth = ({children, onClickHandler}) => {
    return (
        <button className={s.btn} onClick={onClickHandler} >{children}</button>
    );
};

export default MyButtonAuth;