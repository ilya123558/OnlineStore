import React from 'react';
import s from './RoastedСoffeeSorts.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { activeValueRoastedСoffee } from '../../../../redux/sort/sortRoastedСoffee'
import { sortTypeRoastedСoffeeList } from '../../../../redux/cards/roastedСoffee'

const RoastedСoffeeSorts = ({ title }) => {

    const dispatch = useDispatch()
    const sortItem = useSelector(state => state.sortRoastedСoffee.sortItems).filter(elem => elem.title === title)[0]

    const onClickHandler = (index, elem) => {

        dispatch(sortTypeRoastedСoffeeList( {type : sortItem.title, value: elem }))
        dispatch(activeValueRoastedСoffee({ title: sortItem.title, index }))
    }

    return (
        <div className={s.sortItem}>
            <div className={s.weapper}>
                <h1 className={s.title}>{title}</h1>
                <ul className={s.list}>
                    {
                        sortItem.sortValue.map((elem, index) => {
                            return (
                                <li key={elem} className={s.listItem}>
                                    <div onClick={() => onClickHandler(index, elem)} className={sortItem.activeValue === index ? 'RoastedСoffeeSort_active__sA2VW' : ''}></div>
                                    <p className={s.text}>{elem}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    );
};

export default RoastedСoffeeSorts;
