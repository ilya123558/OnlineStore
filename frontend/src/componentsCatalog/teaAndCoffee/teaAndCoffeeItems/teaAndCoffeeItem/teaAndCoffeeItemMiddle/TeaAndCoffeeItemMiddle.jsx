import React from 'react';
import s from './TeaAndCoffeeItemMiddle.module.scss'


const TeaAndCoffeeItemMiddle = ({ title, type, listOptions, imgSrc }) => {
    return (
        <div>
            <div className={s.imgInner}>
                {listOptions.oldPrice && <div className={s.discount} />}
                <img src={imgSrc} alt="blackTea" />
            </div>
            <h3 className={s.title}>{title}</h3>
            <p className={s.subTitle}>{type}</p>
        </div>
    );
};

export default TeaAndCoffeeItemMiddle;