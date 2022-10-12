import React from 'react';
import { useDispatch } from 'react-redux';
import './CardSelect.scss'
import { updateRoastedСoffeePrice } from '../../../../redux/cards/roastedСoffee'


const CardSelect = ({ id, listOptions, discount }) => {

    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        if (discount) {
            const oldPrice = listOptions.filter(elem => elem.optionValue === Number(event.target.value))
            dispatch(updateRoastedСoffeePrice({
                price: event.target.value,
                id: id,
                oldPrice: oldPrice[0].oldPrice
            }))
        }
        else {
            dispatch(updateRoastedСoffeePrice({
                price: event.target.value,
                id: id
            }))
        }

    }

    return (
        <div className="card__select">
            <select onChange={onChangeHandler} className="card__select-nav">
                {
                    listOptions.map(elem => {
                        return <option key={elem.optionValue} value={elem.optionValue}>{elem.optionValue}г</option>
                    })
                }
            </select>
        </div>
    );
};

export default CardSelect;