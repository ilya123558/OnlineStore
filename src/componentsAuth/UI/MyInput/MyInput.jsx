import React from 'react';
import s from './MyInput.module.scss'

const MyInput = ({placeholder}) => {
    return (
        <input className={s.input} type="text" placeholder={placeholder}/>
    );
};

export default MyInput;