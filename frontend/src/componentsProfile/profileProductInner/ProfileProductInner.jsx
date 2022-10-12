import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import s from './ProfileProductInner.module.scss'
import { fetchBasket, fetchBasketAllPrice } from '../../redux/basket/basket';

const ProfileProductInner = () => {

    const dispatch = useDispatch()
    const basketList = useSelector(state => state.basket.basketList)
    const basketPriceAll = useSelector(state => state.basket.basketPriceAll)
    const basketStatus = useSelector(state => state.basket.status)

    const items = [
        { title: 'Текущие заказы' },
        { title: 'Завершенные' },
    ]
    const basketTableElems = [
        { title: 'Товаров:' },
        { title: 'Сумма заказа:' },
        { title: `Скидка (${basketPriceAll.discount}%):` },
        { title: 'Итоговая цена' },
    ]
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        dispatch(fetchBasket())
        dispatch(fetchBasketAllPrice())
    }, [dispatch])

    return (
        <div className={s.profileProductInner}>
            <h3 className={s.title}>Мои заказы</h3>
            <ul className={s.items}>
                {items.map((elem, index) => <li key={index}
                    className={index === activeIndex ? [s.item, s.active].join(' ') : s.item}
                    onClick={() => setActiveIndex(index)}
                >{elem.title}</li>)}
            </ul>
            {items[activeIndex].title === 'Текущие заказы' ?
                <>
                    <div className={s.basketItemsInner}>
                        {basketStatus === 'resolve' ?
                            <>
                                {basketList && basketList.length > 0 ?
                                    <>
                                        <ul className={s.basketTableElems}>{basketTableElems.map(elem => <li
                                            className={s.basketTableElem}
                                            key={elem.title}>{elem.title}</li>)}
                                        </ul>
                                        <ul className={s.basketListInner}>
                                            {basketList.map(elem => <li key={elem._id} className={s.basketListItems}>
                                                <p>{elem.amount} x {elem.title}, {elem.grammar} г.</p>
                                                <p className={s.basketListItemPrice}>{elem.price * elem.amount} р</p>
                                                <p className={s.basketListItemDiscount}>
                                                    {Math.round(((elem.price * elem.amount) / 100) * basketPriceAll.discount)} р
                                                </p>
                                                <p className={s.basketListItemPriceDiscount}>
                                                    {(elem.price * elem.amount) - Math.round(((elem.price * elem.amount) / 100) * basketPriceAll.discount)} р
                                                </p>
                                            </li>)}
                                        </ul>
                                    </>
                                    :
                                    <div className={s.end}>
                                        Список пуст
                                    </div>
                                }

                            </>
                            :
                            <div>loading...</div>
                        }
                    </div>

                    <div className={s.sumPrice}>Сумма заказа: {
                        basketPriceAll.sumPrice - Math.round(basketPriceAll.sumPrice / 100 * basketPriceAll.discount)
                    } ₽</div>
                </>
                :
                <div className={s.end}>
                    Список пуст
                </div>

            }
        </div>
    );
};

export default ProfileProductInner;