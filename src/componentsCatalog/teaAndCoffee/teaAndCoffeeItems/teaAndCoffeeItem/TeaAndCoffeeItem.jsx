import React from 'react';
import s from './TeaAndCoffeeItem.module.scss'

import TeaAndCoffeeItemTop from './teaAndCoffeeItemTop/TeaAndCoffeeItemTop';
import TeaAndCoffeeItemMiddle from './teaAndCoffeeItemMiddle/TeaAndCoffeeItemMiddle';
import TeaAndCoffeeItemBottom from './teaAndCoffeeItemBottom/TeaAndCoffeeItemBottom';

const TeaAndCoffeeItem = (props) => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <TeaAndCoffeeItemTop num={props.num} reviews={props.reviews} selectPrice={props.listOptions} id={props.id} />
                <TeaAndCoffeeItemMiddle title={props.title} type={props.typeProduct} listOptions={props.listOptions[props.activeListOptions]} imgSrc={props.imgSrc}/>
                <TeaAndCoffeeItemBottom listOptions={props.listOptions[props.activeListOptions]} id ={props.id}/>
            </div>

        </div >
    );
};

export default TeaAndCoffeeItem;