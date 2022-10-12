import React from 'react';
import s from './MyInput.module.scss'

const MyInput = (props) => {
    const onChanch = e => {
        props.setInputMass({...props, value: e.target.value}, 'value')
    }

    return (
        <>
            <input
            value={props.value}
            onChange={onChanch}
                className={s.input}
                type={props.type}
                placeholder={props.placeholder} />
        </>

    );
};

export default MyInput;