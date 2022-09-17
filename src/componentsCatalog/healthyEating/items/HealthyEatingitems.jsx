import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import s from './HealthyEatingitems.module.scss';
import HealthyEatingitem from './item/HealthyEatingitem';
import { fetchHealthyEating, sortHealthyEatingList } from '../../../redux/cards/healthyEating';
import { sortUpdateActiveHealthyEating, sortUpdateIndexHealthyEating } from '../../../redux/sort/sortHealthyEating'
import Sort from '../../UI/sorting/Sort.jsx';
import { useDispatch } from 'react-redux';

const HealthyEatingitems = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.sortHealthyEating.sort)

    const healthyEatingCardList = useSelector(state => state.healthyEating.healthyEatingCardList)
    const status = useSelector(state => state.healthyEating.status)



    useEffect(() => {
        dispatch(fetchHealthyEating())
    }, [dispatch])

    return (
        <section className={s.section}>

            <div className='container'>
                <div className={s.sortInner}>
                    <Sort sortUpdateIndex={sortUpdateIndexHealthyEating} sortUpdateActive={sortUpdateActiveHealthyEating} sortItems={state} sortList={sortHealthyEatingList} />
                </div>

                <div className={s.inner}>
                    {status === 'loading'
                        ?
                        <div>...loading</div>
                        :
                        <div className={s.items}>
                            {
                                healthyEatingCardList.map(elem => {
                                    return <HealthyEatingitem key={elem.id} {...elem} />
                                })}
                        </div>

                    }
                </div>
            </div>
        </section>
    );
};

export default HealthyEatingitems;