import React, { useEffect } from 'react';
import s from './ForМendingHeader.module.scss'
import bg from '../../../images/catalog/forМending/bg.png'
import mendingIcon from '../../../images/catalog/forМending/mendingIcon.png'
import SortItemForМending from './sortItemForМending/SortItemForМending'
import { useSelector } from 'react-redux';

const ForМending = () => {

    const sortItems = useSelector(state => state.sortForМending.sortItems)

    useEffect(() => window.scroll(0, 0), [])

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className="container">
                    <p className={s.text}>Главная<span>Каталог товаров</span>Продукция для вендинга</p>
                    <h1>Продукция для вендинга</h1>
                    <div className={s.sortItems}>
                        {
                            sortItems.map(elem => {
                                return <SortItemForМending key={elem.title} {...elem} sortForMendingImg={elem.img} />
                            })
                        }
                        <div className={s.imgInner}><img src={mendingIcon} alt="mendingIcon" /></div>

                    </div>
                </div>
            </div>

            <div style={{ 'backgroundImage': `url(${bg})` }} className={s.bg} />
        </section>
    );
};

export default ForМending;

