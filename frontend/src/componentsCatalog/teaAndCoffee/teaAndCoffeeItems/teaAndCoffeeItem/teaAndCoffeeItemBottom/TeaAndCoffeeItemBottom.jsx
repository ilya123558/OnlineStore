import React from 'react';
import { Link } from 'react-router-dom';
import PayButton from '../../../../UI/button/PayButton';
import s from './TeaAndCoffeeItemBottom.module.scss'

const TeaAndCoffeeItemBottom = ({ listOptions, id }) => {
    return (
        <div className={s.bottomContent}>
            <div className={s.priceTitle}>
                {
                    listOptions.oldPrice && <span className={s.priceTitleDiscount}>{listOptions.oldPrice}р</span>
                }
                {listOptions.price}р
            </div>
            <Link to={`/catalog/tea-and-coffee/${id}`}>
                <PayButton />
            </Link>
        </div>
    );
};

export default TeaAndCoffeeItemBottom;