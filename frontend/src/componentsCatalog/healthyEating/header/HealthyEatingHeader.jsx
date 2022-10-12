import React from 'react';
import s from './HealthyEatingHeader.module.scss'
import SortHealthyEating from '../sort/SortHealthyEating'
import bg from '../../../images/roastedСoffee/header/bg.png'

const HealthyEatingHeader = () => {
    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className="container">
                    <p className={s.text}>Главная<span>Каталог товаров</span>Здоровое питание</p>
                    <h1>Здоровое питание</h1>
                </div>
            </div>
            
            <div style={{ 'backgroundImage': `url(${bg})` }} className={s.bg}>
                <SortHealthyEating />
            </div>
        </section>
    );
};

export default HealthyEatingHeader;