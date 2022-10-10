import React from 'react';
import s from './BasketContent.module.scss'
import { setAmountBasket, fetchDeleteItemBasket, deleteValueBasket, fetchSetAmountBasket, fetchBasketAllPrice } from '../../redux/basket/basket';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const BasketContent = (props) => {

    const dispatch = useDispatch()
    const basketPriceAll = useSelector(state => state.basket.basketPriceAll)

    const onClickDeleteHandler = async () => {
        await dispatch(fetchDeleteItemBasket(props._id))
        await dispatch(deleteValueBasket(props))
    }

    const setAmountHandlerPlus = async () => {
        await dispatch(fetchSetAmountBasket({ ...props, amount: props.amount + 1 }))
        dispatch(setAmountBasket({ ...props, amount: props.amount + 1 }))
    }
    const setAmountHandler = async () => {
        await dispatch(fetchSetAmountBasket({ ...props, amount: props.amount - 1 }))
        dispatch(setAmountBasket({ ...props, amount: props.amount - 1 }))
    }

    useEffect(() => {
        if (!basketPriceAll.discount && basketPriceAll.discount !== 0) {
            dispatch(fetchBasketAllPrice())
        }
    }, [dispatch, basketPriceAll.discount])

    return (
        <div className={s.basketItem}>
            <svg className={[s.deleteSvg, s.delete].join(' ')} onClick={onClickDeleteHandler}
                width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00082 2.00024L17.0005 16.9999" stroke="#F9B300" strokeWidth="2.12553" strokeLinecap="round" />
                <path d="M17.0004 2L2.00071 16.9997" stroke="#F9B300" strokeWidth="2.12553" strokeLinecap="round" />
            </svg>

            <div className={[s.productNameInner, s.productName].join(' ')}>
                <img className={s.productImg} src={`${props.imgSrc}`} alt="icon" />
                <div className={s.productDisc}>
                    <h4 className={s.productTitle}>{props.title}</h4>
                    <p className={s.productSubtitle}>{props.typePage === 'Свежеобжаренный кофе' ? props.subtitle : props.typeProduct}</p>
                    <p className={s.productWeigt}>{props.grammar} г</p>
                </div>
            </div>

            <div className={[s.productPrice, s.price].join(' ')}>{props.price}р</div>

            <div className={[s.productAmount, s.amount].join(' ')}>
                <button disabled={props.amount === 1 ? 'disabled' : ''} className={props.amount === 1 ? [s.num, s.anVisible].join(' ') : s.num}
                    onClick={setAmountHandler}>-</button>
                <p>{props.amount}</p>
                <button className={s.num}
                    onClick={setAmountHandlerPlus}>+</button>
            </div>

            <div className={[s.productDiscount, s.discount].join(' ')}>{basketPriceAll.discount}%</div>

            <div className={[s.productResult, s.result].join(' ')}>{
                (props.price * props.amount) - Math.round((props.price * props.amount) * (basketPriceAll.discount / 100))
            } ₽ </div>
        </div>
    );
};

export default BasketContent;