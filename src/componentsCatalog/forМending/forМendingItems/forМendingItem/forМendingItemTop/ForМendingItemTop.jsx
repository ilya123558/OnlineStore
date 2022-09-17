import React from 'react';
import MySelect from '../../../../UI/select/MySelect';
import s from './ForМendingItemTop.module.scss'
import { updateActiveForМending } from '../../../../../redux/cards/forManding'
import findRating from '../../../../../utils/findRating'

const ForМendingItemTop = (props) => {

    const ratingList = findRating(props.num)

    return (
        <div className={s.topContent}>
        <div>
            <ul className={s.ratingItems}>
                {
                    ratingList.map((elem, index) => {
                        return (
                            <li key={index} className={s.ratingItem}>{elem}</li>
                        )
                    })
                }
            </ul>
            <p className={s.ratingNumber}>{props.num}.0 <span className={s.reviews}>{`(${props.reviews} отзыва)`}</span></p>
        </div>
        <MySelect selectPrice={props.listOptions} setSelectActiveIndex={updateActiveForМending} id={props.id} />
    </div>
    );
};

export default ForМendingItemTop;