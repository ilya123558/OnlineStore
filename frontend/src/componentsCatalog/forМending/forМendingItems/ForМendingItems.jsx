import React, { useEffect } from 'react';
import s from './ForМendingItems.module.scss'
import ForМendingItem from './forМendingItem/ForМendingItem'
import Sort from '../../UI/sorting/Sort';
import { fetchForМending, sortForМendingList } from '../../../redux/cards/forManding'
import { sortUpdateIndexForМending, sortUpdateActiveForМending } from '../../../redux/sort/sortForМending'
import { useDispatch, useSelector } from 'react-redux';

const ForМendingItems = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.sortForМending.sort)
    const forМendingList = useSelector(state => state.forМending.forМendingCardList)
    const status = useSelector(state => state.forМending.status)

    useEffect(() => {
        dispatch(fetchForМending())
    }, [dispatch])

    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.sortInner}>
                    <Sort sortUpdateIndex={sortUpdateIndexForМending} sortUpdateActive={sortUpdateActiveForМending} sortItems={state} sortList={sortForМendingList} />
                </div>
                <div className={s.inner}>
                    {status === 'loading'
                        ?
                        <div>...loading</div>
                        :
                        forМendingList.map(elem => {
                            return (
                                <ForМendingItem key={elem.id} {...elem} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ForМendingItems;