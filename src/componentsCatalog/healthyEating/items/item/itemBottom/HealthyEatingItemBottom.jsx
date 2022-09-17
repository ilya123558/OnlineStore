import React from 'react';
import s from './HealthyEatingItemBottom.module.scss'
import PayButton from '../../../../UI/button/PayButton'
import { Link } from 'react-router-dom';

const HealthyEatingItemBottom = ({ listOptions, typeProduct, id }) => {
    return (
        <div>
            <div className={s.topInner}>
                <h3 className={s.title}>Наименование товара</h3>
                <p className={s.subtitle}>{typeProduct}</p>
            </div>
            <div className={s.bottomInner}>
                <div className={s.price}>{listOptions} ₽</div>
                <Link to={`/catalog/healthy-eating/${id}`}>
                    <PayButton />
                </Link>
            </div>
        </div>
    );
};

export default HealthyEatingItemBottom;