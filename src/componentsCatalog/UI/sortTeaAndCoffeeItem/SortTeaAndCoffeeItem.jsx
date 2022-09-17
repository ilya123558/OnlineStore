import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortTeaAndCoffeeActiveState } from '../../../redux/sort/sortTeaAndCoffee'
import s from './SortTeaAndCoffeeItem.module.scss'
import { filterActiveTeaAndCoffee } from '../../../redux/cards/teaAndCoffee';

const SortTeaAndCoffeeItem = ({ img, text, id }) => {

    const dispatch = useDispatch()
    const activeId = useSelector(state => state.sortTeaAndCoffee.sortActiveId)
    let style = {}

    if (text === '') {
        style = { 'opacity': '0', 'cursor': 'auto', "zIndex": '-2' }
    }
    if (id === activeId) {
        style = {'backgroundColor': '#F9B300'}
    }

    const onClickHandler = () => {
        dispatch(sortTeaAndCoffeeActiveState(id)) 
        dispatch(filterActiveTeaAndCoffee(text))
    }
    

    return (
        <div style={ style } onClick={onClickHandler} className={s.item}>
            <div><img src={img} alt="serchItem" className={s.images}/></div>
            <p>{text}</p>
        </div>
    );
};

export default SortTeaAndCoffeeItem;