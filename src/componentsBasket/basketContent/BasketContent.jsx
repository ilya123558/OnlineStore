import React from 'react';
import s from './BasketContent.module.scss'
import { setAmountBasket, deleteValueBasket } from '../../redux/basket/basket';
import { useDispatch } from 'react-redux';

const BasketContent = (props) => {

    const dispatch = useDispatch()

    return (
        <div className={s.basketItem}>
            <svg className={[s.deleteSvg, s.delete].join(' ')} onClick={() => dispatch(deleteValueBasket(props))} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00082 2.00024L17.0005 16.9999" stroke="#F9B300" strokeWidth="2.12553" strokeLinecap="round" />
                <path d="M17.0004 2L2.00071 16.9997" stroke="#F9B300" strokeWidth="2.12553" strokeLinecap="round" />
            </svg>

            <div className={[s.productNameInner, s.productName].join(' ')}>
                <img className={s.productImg} src={`${props.imgSrc}`} alt="icon" />
                <div className={s.productDisc}>
                    <h4 className={s.productTitle}>{props.title}</h4>
                    <p className={s.productSubtitle}>{props.typePage === 'Свежеобжаренный кофе' ? props.subtitle : props.typeProduct}</p>
                    <p className={s.productWeigt}>{props.typePage === 'Свежеобжаренный кофе' ? props.listOptions[props.activeIndex].optionValue : props.listOptions[props.activeIndex].title} г</p>
                </div>
            </div>

            <div className={[s.productPrice, s.price].join(' ')}>{props.listOptions[props.activeIndex].price}р</div>

            <div className={[s.productAmount, s.amount].join(' ')}>
                <button disabled={props.amount === 1 ? 'disabled' : ''} className={props.amount === 1 ? [s.num, s.anVisible].join(' ') : s.num}
                    onClick={() => dispatch(setAmountBasket({ amount: props.amount - 1, elem: props }))}>-</button>
                <p>{props.amount}</p>
                <button className={s.num}
                    onClick={() => dispatch(setAmountBasket({ amount: props.amount + 1, elem: props }))}>+</button>
            </div>

            <div className={[s.productDiscount, s.discount].join(' ')}>{props.disc || 0}%</div>

            <div className={[s.productResult, s.result].join(' ')}>{props.listOptions[props.activeIndex].price * props.amount} ₽ </div>
        </div>
    );
};

export default BasketContent;