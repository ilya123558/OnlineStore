import React from 'react';
import s from './TeaAndCoffeeHeader.module.scss'
import bg from '../../../images/roastedСoffee/header/bg.png'
import SortTeaAndCoffee from '../sort/SortTeaAndCoffee';
import teaImg from '../../../images/catalog/TeaAndCoffee/tea.png'

const TeaAndCoffeeHeader = () => {
    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className="container">
                    <p className={s.text}>Главная<span>Каталог товаров</span>Чай и кофейные напитки</p>
                    <h1>Чай и кофейные напитки</h1>
                </div>
            </div>
            <div className={s.teaImg}><img src={teaImg} alt="teaImg" /></div>
            <div style={{ 'backgroundImage': `url(${bg})` }} className={s.bg}><SortTeaAndCoffee /></div>
        </section>
    );
};

export default TeaAndCoffeeHeader;