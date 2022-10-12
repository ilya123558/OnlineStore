import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './MySelect.module.scss'

const MySelect = ({ selectPrice, setSelectActiveIndex, id }) => {
    // selectPrice: [{title: '250p', price: 250}]
    // setSelectActiveIndex: ф-ция изменяющяя index <selectPrice>
    // id: это id элемента массива

    const dispatch = useDispatch()

    const [selectActive, setSelectActive] = useState(false)
    const [indexSelectPrice, setIndexSelectPrice] = useState(0)


    const onClickHandler = (index) => {
        dispatch(setSelectActiveIndex({ value: index, id }))
        setIndexSelectPrice(index)
    }

    const onClickItemHandler = (index) => {
        onClickHandler(index)
        setSelectActive(!selectActive)
    }

    return (
        <div className={selectActive ? [s.selectInner, s.selectInnerActive].join(' ') : s.selectInner}>
            <div className={s.selectValueInner} onClick={() => setSelectActive(!selectActive)}>
                <p className={s.selectValue}>
                    {selectPrice[indexSelectPrice].title}г
                </p>
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 4L9 1" stroke="black" strokeWidth="1.06276" />
                </svg>
            </div>
            <ul className={selectActive ? [s.selectItems, s.selectItemsActive].join(' ') : s.selectItems}>
                {selectActive &&
                    selectPrice.map((elem, index) => {
                        return (
                            <li key={index}
                                onClick={() => onClickItemHandler(index)}
                                className={s.selectItem} >
                                {elem.title}г
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default MySelect;