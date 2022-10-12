import React from 'react';
import './MyCard.scss'
import CardSelect from './cardSelect/CardSelect';
import CardContent from './cardContent/CardContent';
import CardAdd from './cardAdd/CardAdd';

const MyCard = (props) => {

    return (
        <div style={props.discountPath && {'margin': '25px'}} className={props.special === 'Скидки' ? 'card card_active' : 'card'}>
            <CardSelect id={props.id} listOptions={props.listOptions} discount={props.special === 'Скидки' ? true : false} />
            <CardContent {...props} />
            <CardAdd {...props} />
        </div>
    );
};

export default MyCard;