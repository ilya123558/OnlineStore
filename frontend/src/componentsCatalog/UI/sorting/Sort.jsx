import React from 'react';
import { useDispatch } from 'react-redux';
import s from './Sort.module.scss'

const Sort = ({ sortUpdateIndex, sortUpdateActive, sortItems, sortList }) => {
    // sortUpdateIndex: обновление активного индекса
    // sortUpdateActive: toggle класса скрытие/открытие активного класса
    // sortItems: массив по которому происходит сортировка 
    // sortList: сортировка по выбранному элементу сортировки

    const dispath = useDispatch()

    const onClickSortHandler = () => {
        dispath(sortUpdateActive(!sortItems.isActive))
    }

    const onClickSortItemHandler = (index) => {

        dispath(sortUpdateIndex(index))
        dispath(sortUpdateActive(!sortItems.isActive))
        dispath(sortList(sortItems.sortValue[index].name))
    }

    return (
        <div className={s.sortInner}>
            <p onClick={onClickSortHandler} className={sortItems.isActive ? s.sortActiveValue : s.sortValue}>
                {sortItems.activeIndex || sortItems.activeIndex === 0 ? sortItems.sortValue[sortItems.activeIndex].title : 'Сортировать'}
            </p>
            {
                sortItems.isActive &&
                <ul className={s.sortItemsList}>
                    {
                        sortItems.sortValue.map((elem, index) => {
                            return (
                                <li key={index} onClick={() => onClickSortItemHandler(index)}
                                    className={sortItems.activeIndex === index ? [s.sortItem, s.sortItemActive].join(' ') : s.sortItem}>
                                    {elem.title}
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default Sort;