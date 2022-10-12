import React from 'react';
import s from './SortHealthyEating.module.scss'
import { useSelector } from 'react-redux';
import SortHealthyEatingItem from './sortHealthyEatingItem/SortHealthyEatingItem';
import healthyEating from '../../../images/catalog/healthyEating/healthyEatingIcon.png'


const SortHealthyEating = () => {

    const sortList = useSelector(state => state.sortHealthyEating.sortItems)
    
    return (
        <div className={s.sortItemsInner}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.healthyEating}><img src={healthyEating} alt="healthyEating" /></div>
                    <div className={s.sortItems}>
                        {
                            sortList.map(elem => {
                                return (
                                    <SortHealthyEatingItem key={elem.id} img={elem.img} text={elem.title} id={elem.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortHealthyEating