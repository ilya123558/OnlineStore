import React from 'react';
import { Link } from 'react-router-dom';
import ForMendingMiddle from './forMendingMiddle/ForMendingMiddle';
import s from './ForМendingItem.module.scss'
import ForМendingItemTop from './forМendingItemTop/ForМendingItemTop'

const ForМendingItem = (props) => {
    return (
        <div className={s.inner}>
            <div className={s.container}>
                <ForМendingItemTop {...props} />
                <ForMendingMiddle {...props} />
                <Link to={`/catalog/for-mending/${props.id}`}>
                    <button className={s.btn}>В корзину</button>
                </Link>
            </div>
        </div>
    );
};

export default ForМendingItem;