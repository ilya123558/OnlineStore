import React from 'react'
import s from './useSerch.module.scss'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ReactComponent as Serch } from '../images/header/serch.svg'
import serchSvg from '../images/header/serchSvg.svg'
import { fetchSerch } from '../redux/serch/serch'
import { Link } from 'react-router-dom'


const useSerch = (serch, setSerch, serchValue, setSerchValue) => {

    const dispatch = useDispatch()
    const serchItems = useSelector(state => state.serch.serchItems)
    const status = useSelector(state => state.serch.status)

    const ref = useRef()

    const sercHeandler = () => {
        setTimeout(() => {
            setSerch(false)
            setSerchValue('')
            dispatch(fetchSerch(''))
        }, 200)
    }

    const onChangeHandler = (event) => {
        dispatch(fetchSerch(serchValue))
        setSerchValue(event.target.value)
    }

    useEffect(() => {
        if (serch) {
            ref.current.focus()
        }
    }, [serch, ref, serchItems])

    if (serch) {
        return (
            <div className={s.serchInner}>
                <input
                    ref={ref}
                    onBlur={sercHeandler}
                    style={{ backgroundImage: `url(${serchSvg})` }}
                    value={serchValue}
                    onChange={onChangeHandler}
                    className={serchItems.length > 0
                        ? ["serch-active__Overlap", "serch-active"].join(' ')
                        : "serch-active"
                    }
                    placeholder='Поиск по товарам'>
                </input>
                {status === 'resolve' &&
                    <ul className={s.serchItemsInner}>
                        {serchItems.map((elem, index) => <Link key={index} to={`/catalog/${elem.typePage}/${elem.id}`}><li
                            className={index === serchItems.length - 1
                                ? [s.serchItem, s.serchItemLast].join(' ')
                                : s.serchItem}>
                            {elem.title}
                        </li></Link>)}
                    </ul>
                }
            </div >


        )

    }
    else {
        return (
            <div onClick={() => setSerch(true)} className="header__profile-wrapper">
                <Serch fill='transparent' className='serch' stroke='current' />
            </div>
        )
    }
}

export default useSerch

