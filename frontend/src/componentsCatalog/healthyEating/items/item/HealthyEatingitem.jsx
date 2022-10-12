import React from 'react';
import s from './HealthyEatingitem.module.scss'
import HealthyEatingItemBottom from './itemBottom/HealthyEatingItemBottom';
import HealthyEatingItemTop from './itemTop/HealthyEatingItemTop'

const HealthyEatingItem = (props) => {

    return (
        <div className={s.inner}>
            <HealthyEatingItemTop reating={props.num} selectPrice={props.listOptions} id={props.id} />

            <div className={s.innerImg}>
                <img className={s.img} src={props.imgSrc} alt="icon" />
            </div>

            <HealthyEatingItemBottom listOptions={props.listOptions[props.activeListOptions].price} typeProduct={props.typeProduct} id={props.id}/>
        </div>
    );
};

export default HealthyEatingItem;


