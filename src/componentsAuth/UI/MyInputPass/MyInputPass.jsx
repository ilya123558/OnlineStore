import React, { useState } from 'react';
import MyInput from '../MyInput/MyInput';
import s from './MyInputPass.module.scss'

const MyInputPass = (props) => {

    const [togglePass, setTogglePass] = useState(true)

    const onClickPass = () => {
        setTogglePass(!togglePass)

        if (togglePass) {
            props.setInputMass({...props.elem, type: 'text'} , 'password')
        }
        else {
            props.setInputMass({...props.elem, type: 'password'}, 'password')
        }

    }

    return (
        <div className={s.innerInputPass}>
            <MyInput {...props} />
            <svg className={s.unDisablePass} onClick={onClickPass} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#C9C9C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#C9C9C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </div>
    );
};

export default MyInputPass;