import React from 'react';
import s from './TeaAndCoffeeItemTop.module.scss'
import MySelect from '../../../../UI/select/MySelect';
import findRating from '../../../../../utils/findRating'
import { updateActiveTeaAndCoffee } from '../../../../../redux/cards/teaAndCoffee'

const TeaAndCoffeeItemTop = ({ num, reviews, selectPrice, id }) => {

    const ratingList = findRating(num)

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
                <p className={s.ratingNumber}>{num}.0 <span className={s.reviews}>{`(${reviews} отзыва)`}</span></p>
            </div>
            <MySelect selectPrice={selectPrice} setSelectActiveIndex={updateActiveTeaAndCoffee} id={id}/>
        </div>
    );
};

export default TeaAndCoffeeItemTop;