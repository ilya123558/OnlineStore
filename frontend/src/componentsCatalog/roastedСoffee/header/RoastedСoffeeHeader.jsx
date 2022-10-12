import React from 'react';
import s from './RoastedСoffeeHeader.module.scss'
import roastedСoffeeImg from '../../../images/roastedСoffee/header/index'

const RoastedСoffeeHeader = () => {
    return (
        <section className={s.header}>
            <div className={s.cupAndCoffee}>
                <div style={{ 'backgroundImage': `url(${roastedСoffeeImg('cup')})` }} className={s.cup}></div>
                <div style={{ 'backgroundImage': `url(${roastedСoffeeImg('coffee')})` }} className={s.coffee}></div>
            </div>
            <div className="container">
                <div className={s.inner}>
                    <p className={s.path}>Главная <span>Каталог товаров</span> Свежеобжаренный кофе</p>
                    <div className={s.title}>Свежеобжаренный кофе</div>
                </div>
            </div>
            <div style={{ 'backgroundImage': `url(${roastedСoffeeImg('bg')})` }} className={s.bg}></div>
        </section>
    );
};

export default RoastedСoffeeHeader;