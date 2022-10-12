import React from 'react';
import s from './UserButton.module.scss'

const UserButton = ({onClickHandler, children}) => {
    return (
        <button onClick={onClickHandler} className={s.btn}>{children}</button>
    );
};

export default UserButton;