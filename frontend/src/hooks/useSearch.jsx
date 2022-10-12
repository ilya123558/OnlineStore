import React from 'react'
import s from './useSearch.module.scss'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ReactComponent as Search } from '../images/header/serch.svg'
import searchSvg from '../images/header/serchSvg.svg'
import { fetchSearch } from '../redux/search/search'
import { Link } from 'react-router-dom'


const useSearch = (search, setSearch, searchValue, setSearchValue) => {

    const dispatch = useDispatch()
    const searchItems = useSelector(state => state.search.searchItems)
    const status = useSelector(state => state.search.status)

    const ref = useRef()

    const searcHeandler = () => {
        setTimeout(() => {
            setSearch(false)
            setSearchValue('')
            dispatch(fetchSearch(''))
        }, 200)
    }

    const onChangeHandler = (event) => {
        dispatch(fetchSearch(searchValue))
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        if (search) {
            ref.current.focus()
        }
    }, [search, ref, searchItems])

    if (search) {
        return (
            <div className={s.searchInner}>
                <input
                    ref={ref}
                    onBlur={searcHeandler}
                    style={{ backgroundImage: `url(${searchSvg})` }}
                    value={searchValue}
                    onChange={onChangeHandler}
                    className={searchItems.length > 0
                        ? ["search-active__Overlap", "search-active"].join(' ')
                        : "search-active"
                    }
                    placeholder='Поиск по товарам'>
                </input>
                {status === 'resolve' &&
                    <ul className={s.searchItemsInner}>
                        {searchItems.map((elem, index) => <Link key={index} to={`/catalog/${elem.typePage}/${elem.id}`}><li
                            className={index === searchItems.length - 1
                                ? [s.searchItem, s.searchItemLast].join(' ')
                                : s.searchItem}>
                            {elem.title}
                        </li></Link>)}
                    </ul>
                }
            </div >


        )

    }
    else {
        return (
            <div onClick={() => setSearch(true)} className="header__profile-wrapper">
                <Search fill='transparent' className='search' stroke='current' />
            </div>
        )
    }
}

export default useSearch

