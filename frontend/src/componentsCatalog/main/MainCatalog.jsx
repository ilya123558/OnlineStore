import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './MainCatalog.module.scss'


const MainCatalog = () => {

    useEffect(() => window.scroll(0, 0), [])

    const pathArr = [
        { link: '/catalog/roasted-coffee', title: 'Свежеобжаренный кофе' },
        { link: '/catalog/tea-and-coffee', title: 'Чай и кофейные напитки' },
        { link: '/catalog/for-mending', title: 'Продукция для вендинга' },
        { link: '/catalog/healthy-eating', title: 'Здоровое питание' },
    ]

    return (
        <div className={s.wrapper}>
            <div className="container">
                <div className={s.wrapperLinks}>
                    {
                        pathArr.map(elem => {
                            return (
                                <Link className={s.link} key={elem.title} to={elem.link}>{elem.title}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MainCatalog;