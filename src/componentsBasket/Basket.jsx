import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Basket.module.scss'
import BasketContent from './basketContent/BasketContent';
import { removeBasket } from '../redux/basket/basket';
import { useEffect } from 'react';
import bg from '../images/basket/bg.png'

const Basket = () => {

    const dispatch = useDispatch()

    const basketList = useSelector(state => state.basket.basketList)

    useEffect(() => {
        const basket = document.querySelector('.basket')

        if (basketList.length === 0) {
            basket.style.fill = 'transparent'
            basket.style.stroke = '#000'
        }
    }, [basketList])

    const items = [
        { title: 'Удалить товар', className: s.delete },
        { title: 'Наименование товара', className: s.productName },
        { title: 'Цена', className: s.price },
        { title: 'Количество', className: s.amount },
        { title: 'Скидка', className: s.discount },
        { title: 'Итого', className: s.result },
    ]

    return (
        <section className={s.basketHeader}>
            <div className='container'>
                <div className={s.nav}>
                    <p>Главная Корзина</p>
                </div>

                <div className={s.basketInner}>
                    <div className={s.basketContentTop}>
                        <h3 className={s.title}>Товаров в корзине: {basketList.length}</h3>
                        <button onClick={() => dispatch(removeBasket())} className={s.button}>Удалить все</button>
                    </div>

                    {basketList.length > 0
                        ?
                        <>
                            <div className={s.basketContent}>
                                <ul className={s.itemsInner}>
                                    {
                                        items.map(elem => <li key={elem.title} className={elem.className}>{elem.title}</li>)
                                    }
                                </ul>
                            </div>
                            {
                                basketList.map((elem, index) => <BasketContent key={index} {...elem} />)
                            }
                        </>

                        :
                        <div className={s.empty}>Нет товаров в корзине </div>
                    }
                </div>
            </div>

            <div style={{ backgroundImage: `url(${bg})` }} className={s.bg}></div>

        </section>

    );
};

export default Basket;