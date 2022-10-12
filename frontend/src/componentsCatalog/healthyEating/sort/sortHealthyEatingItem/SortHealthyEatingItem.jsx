import React from 'react';
import s from './SortHealthyEatingItem.module.scss'
import { useDispatch } from 'react-redux';
import { sortHealthyEatingActiveState } from '../../../../redux/sort/sortHealthyEating'
import { filterHealthyEatingList } from '../../../../redux/cards/healthyEating';
import { useSelector } from 'react-redux';

const SortHealthyEatingItem = ({ img, text, id }) => {
    const dispatch = useDispatch()
    const activeId = useSelector(state => state.sortHealthyEating.sortActiveId)
    let style = {}

    if (text === '') {
        style = { 'opacity': '0', 'cursor': 'auto', "zIndex": '-2' }
    }
    if (id === activeId) {
        style = {'backgroundColor': '#F9B300'}
    }

    const onClickHandler = () => { 
        dispatch(sortHealthyEatingActiveState(id))
        dispatch(filterHealthyEatingList(text))
    }

    return (
        <div style={style} onClick={onClickHandler} className={s.item}>
            <div style={style}><img src={img} alt="serchItem" /></div>
            <p>{text}</p>
        </div>
    );
};

export default SortHealthyEatingItem;