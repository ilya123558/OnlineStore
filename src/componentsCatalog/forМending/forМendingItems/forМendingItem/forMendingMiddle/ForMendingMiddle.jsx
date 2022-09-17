import React from 'react';
import s from './ForMendingMiddle.module.scss'
import imgItem from '../../../../../images/catalog/forМending/imgItem.png'

const ForMendingMiddle = (props) => {
    return (
        <div>
            <div className={s.inner}>
                <img src={imgItem} alt="imgItem" />
            </div>
            <h4 className={s.title}>{props.title}</h4>
            <p className={s.subtitle}>{props.typeProduct} <span>{props.listOptions[props.activeListOptions].price}р</span> </p>
        </div>
    );
};

export default ForMendingMiddle;