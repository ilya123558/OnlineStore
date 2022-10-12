import s from './HealthyEatingItemTop.module.scss'
import React from 'react';
import findRating from '../../../../../utils/findRating'
import MySelect from '../../../../UI/select/MySelect';
import { updateActiveHealthyEating } from '../../../../../redux/cards/healthyEating'

const HealthyEatingItemTop = ({ reating, selectPrice, id }) => {
    const reatingMass = findRating(reating)

    return (
        <div className={s.innerTop}>
            <div className={s.reating}>
                <div>
                    {
                        reatingMass.map((el, index) => <div className={s.innerForStar} key={index}>{el}</div>)
                    }
                </div>
                <p className={s.reatingChar}>{reating}.0</p>
            </div>


                <div className={s.selected}>
                    <MySelect selectPrice={selectPrice} setSelectActiveIndex={updateActiveHealthyEating} id={id} />
                </div>
            </div>
            );
};

            export default HealthyEatingItemTop