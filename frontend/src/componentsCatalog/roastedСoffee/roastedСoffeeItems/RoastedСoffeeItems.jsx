import React, { useEffect, useRef } from 'react';
import s from './RoastedСoffeeItems.module.scss'
import MyCard from '../../../components/UI/roastedСoffee/MyCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoastedСoffeeAll } from '../../../redux/cards/roastedСoffee'
import { sortUpdateIndexRoastedСoffee, sortUpdateActiveRoastedСoffee } from '../../../redux/sort/sortRoastedСoffee'
import { sortRoastedСoffeeList } from '../../../redux/cards/roastedСoffee'

const RoastedСoffeeItems = () => {
    const sortPath = useRef(null)

    const dispatch = useDispatch()
    const status = useSelector(state => state.roastedСoffee.status)
    const roastedСoffeeCardList = useSelector(state => state.roastedСoffee.roastedСoffeeCardList)
    const sort = useSelector(state => state.sortRoastedСoffee.sort)
    const isSorted = useSelector(state => state.roastedСoffee.sorted)

    useEffect(() => {
        dispatch(fetchRoastedСoffeeAll())
    }, [dispatch])

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (!e.path.includes(sortPath.current)) {
                dispatch(sortUpdateActiveRoastedСoffee(false))
            }
        })
    }, [dispatch])

    const onClickHandlerIsActive = () => {
        dispatch(sortUpdateActiveRoastedСoffee(!sort.isActive))
    }

    const onClickHandlerSetActiveIndex = (index, name) => {
        dispatch(sortUpdateIndexRoastedСoffee(index))
        dispatch(sortUpdateActiveRoastedСoffee(false))
        dispatch(sortRoastedСoffeeList(name))
    }

    return (
        <section className={s.roastedСoffee}>
            <div className='container'>
                <div className={s.sortWrapper}>
                    <div ref={sortPath} className={s.sort}>
                        <p onClick={onClickHandlerIsActive} className={sort.isActive ? s.activeSort : ''}>{isSorted?sort.sortValue[sort.activeIndex].title : 'Сортировать'}</p>
                        {sort.isActive &&
                            <ul>
                                {
                                    sort.sortValue.map((elem, index) => {
                                        return <li key={index} onClick={() => onClickHandlerSetActiveIndex(index, elem.name)} className={sort.activeIndex === index ? s.active : ''}>{elem.title}</li>
                                    })
                                }
                            </ul>

                        }
                    </div>
                </div>


                {
                    status === 'loading' ? <h1>loading...</h1> :
                        <div className={s.wrapper}>
                            {
                                roastedСoffeeCardList && roastedСoffeeCardList.map((elem) => {
                                    return (
                                        <div key={elem.id}>
                                            <MyCard {...elem} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        </section>
    );
};

export default RoastedСoffeeItems;