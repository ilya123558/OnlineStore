import React, { useEffect } from 'react';
import TeaAndCoffeeItem from './teaAndCoffeeItem/TeaAndCoffeeItem';
import s from './TeaAndCoffeeItems.module.scss'
import { useSelector } from 'react-redux'
import { sortUpdateActiveTeaAndCoffee, sortUpdateIndexTeaAndCoffee } from '../../../redux/sort/sortTeaAndCoffee'
import { fetchTeaAndCoffee, sortTeaAndCoffeeList } from '../../../redux/cards/teaAndCoffee'
import Sort from '../../UI/sorting/Sort.jsx';
import { useDispatch } from 'react-redux';


const TeaAndCoffeeItems = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state.sortTeaAndCoffee.sort)
    const teaAndCoffeeCardList = useSelector(state => state.teaAndCoffee.teaAndCoffeeCardList)
    const status = useSelector(state => state.teaAndCoffee.status)

    useEffect(() => {
        dispatch(fetchTeaAndCoffee())
    }, [dispatch])


    return (
        <section className={s.section}>
            <div className="container">
                <div className={s.sortInner}>
                    <Sort sortUpdateIndex={sortUpdateIndexTeaAndCoffee} sortUpdateActive={sortUpdateActiveTeaAndCoffee} sortItems={state} sortList={sortTeaAndCoffeeList} />
                </div>
                <div className={s.inner}>
                    {status === 'loading'
                        ?
                        <div>...loading</div>
                        :
                        teaAndCoffeeCardList.map(elem => {
                            return (
                                <TeaAndCoffeeItem key={elem.id} {...elem} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default TeaAndCoffeeItems;