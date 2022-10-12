import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './SortItemForМending.module.scss'
import { sortForМendingActiveState } from '../../../../redux/sort/sortForМending'
import { filterForМendingList } from '../../../../redux/cards/forManding'

const SortItemForМending = ({ title, sortForMendingImg, id }) => {

    const dispatch = useDispatch()
    let style = {}
    const activeId = useSelector(state => state.sortForМending.sortActiveId)

    const onClickHandler = () => {
        dispatch(sortForМendingActiveState(id))
        dispatch(filterForМendingList(title))
    }

    if (title === '') {
        style = { 'opacity': '0', 'cursor': 'auto', "zIndex": '-2' }
    }
    if (id === activeId) {
        style = { 'backgroundColor': '#F9B300' }
    }

    return (
        <div
            style={style}
            className={s.item}
            onClick={onClickHandler}>
            <div><img src={sortForMendingImg} alt="sortForMending" /></div>
            <div className={s.title}>{title}</div>
        </div>
    );
};

export default SortItemForМending;