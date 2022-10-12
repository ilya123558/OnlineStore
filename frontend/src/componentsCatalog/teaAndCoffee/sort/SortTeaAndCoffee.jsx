import React from 'react';
import SortTeaAndCoffeeItem from '../../UI/sortTeaAndCoffeeItem/SortTeaAndCoffeeItem';
import s from './SortTeaAndCoffee.module.scss'
import { useSelector } from 'react-redux';

const SortTeaAndCoffee = () => {

    const sortList = useSelector(state => state.sortTeaAndCoffee.sortItems)

    return (
        <div className={s.sortItemsInner}>
            <div className="container">
                <div className={s.sortItems}>
                    {
                        sortList.map(elem => {
                            return (
                                <SortTeaAndCoffeeItem key={elem.id} img={elem.img} text={elem.title} id={elem.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SortTeaAndCoffee;