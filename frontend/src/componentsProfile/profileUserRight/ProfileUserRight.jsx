import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchBasketAllPrice } from '../../redux/basket/basket';
import s from './ProfileUserRight.module.scss'

const ProfileUserRight = () => {

    const dispatch = useDispatch()
    const basketPriceAll = useSelector(state => state.basket.basketPriceAll)

    const [toggle, setToggle] = useState(false)

    useEffect(() => [
        dispatch(fetchBasketAllPrice())
    ], [dispatch])

    const nextDisc = () => basketPriceAll.discount === 0 ? 10 : (basketPriceAll.discount === 10 ? 15 : 20)
    const priceForNextDisc = () => basketPriceAll.discount === 0
        ? 5000 - basketPriceAll.sumPrice
        : (basketPriceAll.discount === 10 ? 7000 - basketPriceAll.sumPrice : 10000 - basketPriceAll.sumPrice)

    return (
        <div className={s.profileUserRight}>
            {toggle
                ?
                <>
                    <h5 className={s.infoNextDiscTitle}>{basketPriceAll.discount !== 20
                        ? `*До скидки ${nextDisc()}% не хватает покупок на сумму: ${priceForNextDisc()} ₽`
                        : "Достигнута максимальная скидка"}</h5>
                    <p className={s.infoDiscText}>Скидка 10% - сумма покупок 5000 ₽ </p>
                    <p className={s.infoDiscText}>Скидка 15% - сумма покупок 7000 ₽ </p>
                    <p className={s.infoDiscText}>Скидка 20% - сумма покупок 10000 ₽ </p>
                </>
                :
                <>
                    <h3 className={s.discText}>Ваша скидка: {basketPriceAll.discount}%</h3>
                    <p className={s.allPrice}>Сумма заказов без скидки: {basketPriceAll.sumPrice} ₽*</p>
                    <p className={s.infoNextDisc}>{basketPriceAll.discount !== 20
                        ? `*До скидки ${nextDisc()}% не хватает покупок на сумму: ${priceForNextDisc()} ₽`
                        : "Достигнута максимальная скидка"}</p>
                </>
            }
            <div onClick={() => setToggle(!toggle)} className={s.question}>?</div>
        </div>
    );
};

export default ProfileUserRight;