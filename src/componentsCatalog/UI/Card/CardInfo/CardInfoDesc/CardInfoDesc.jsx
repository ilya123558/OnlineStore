import React from 'react';
import s from './CardInfoDesc.module.scss'
import findCoffee from '../../../../../utils/findCofee';
import findRating from '../../../../../utils/findRating'
import findLvl from '../../../../../utils/findLvl';
import { useState } from 'react';
import { setValueBasket } from '../../../../../redux/basket/basket';
import { useDispatch } from 'react-redux';

const CardInfoDesc = (props) => {

    const dispatch = useDispatch()

    const [activeIndex, setActiveIndex] = useState(0)
    const [amount, setAmount] = useState(1)

    const items = [
        { title: 'Кислинка', lvl: props.acidicLvl },
        { title: 'Горчинка', lvl: props.bitterLvl },
        { title: 'Насыщенность', lvl: props.saturatedLvl },
    ]

    const onClickHandler = (index) => {
        setActiveIndex(index)
    }

    const onClickHandlrAmount = (type) => {
        if (type === 'add') {
            setAmount(amount + 1)
        }
        else {
            setAmount(amount - 1)
        }
    }

    const onClickPayHandler = () => {
        dispatch(setValueBasket({ ...props, activeIndex, amount }))
        const basket = document.querySelector('.basket')
        basket.style.fill = '#F9B300'
        basket.style.stroke = '#F9B300'
        // transparent
        setTimeout(() => {
            basket.style.fill = 'transparent'
            basket.style.stroke = 'current'
        }, 400)

        
    }


    return (
        <div className={s.mainInfo}>
            {props.typePage === 'Свежеобжаренный кофе' &&
                <div className={s.ulInner}>{findCoffee(props.toastingLvl)}</div>
            }
            <h3 className={s.title}>{props.title}</h3>
            <p className={s.subtitle}>
                {props.typePage === 'Свежеобжаренный кофе'
                    ?
                    props.subtitle
                    :
                    props.typeProduct
                }
            </p>
            <div className={s.ratingInner}>
                <div className={s.ratingStars}>{findRating(props.num)}</div>
                <p className={s.ratingText}>{props.num}.0</p>
                <p className={s.reviews}>({props.reviews} отзыва)</p>
            </div>
            <p className={s.description}>
                {props.description}
            </p>

            {props.typePage === 'Свежеобжаренный кофе' &&
                <div className={s.items}>
                    {
                        items.map(elem => {
                            return <div key={elem.title} className={s.item}>
                                <p>{elem.title}</p>
                                {findLvl(elem.lvl)}
                            </div>
                        })
                    }
                </div>
            }

            <div className={s.priceListInner}>
                {props.listOptions &&
                    props.listOptions.map((elem, index) => {
                        return <div key={elem.price} className={s.priceItemInner}>
                            <div className={activeIndex === index ? [s.toggle, s.activeToggle].join(' ') : s.toggle} onClick={() => onClickHandler(index)}></div>

                            {props.typePage === 'Свежеобжаренный кофе'
                                ?
                                <p>{elem.optionValue} г.</p>
                                :
                                <p>{elem.title} г.</p>
                            }
                        </div>
                    })
                }
            </div>

            <div className={s.payInner}>
                <div className={s.amount}>
                    <button disabled={amount === 1 ? 'disabled' : ''} className={amount === 1 ? [s.num, s.anVisible].join(' ') : s.num} onClick={() => onClickHandlrAmount('dec')}>-</button>
                    <p>{amount}</p>
                    <button className={s.num} onClick={() => onClickHandlrAmount('add')}>+</button>
                </div>
                {props.listOptions &&
                    <button className={s.button} onClick={onClickPayHandler}>Купить за {props.listOptions[activeIndex].price * amount} ₽ </button>
                }
            </div>
            {props.typePage === 'Свежеобжаренный кофе' &&
                <div className={s.special}>
                    {props.special}
                </div>
            }

        </div>
    );
};

export default CardInfoDesc;