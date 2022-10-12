import React from 'react';
import CupCoffee from '../UI/cupCoffee/CupCoffee';
import './SectionAbout.scss'
import cup from '../../images/section-about/cup.svg'
import consultation from '../../images/section-about/consultation.svg'
import tiket from '../../images/section-about/tiket.svg'
import bg from '../../images/section-about/bg.png'
import bg2 from '../../images/section-about/bg2.png'
import bg3 from '../../images/section-about/bg3.png'

import SelectAboutItem from './SelectAboutItem';


const SectionAbout = () => {

    const aboutItems = [
        {svg: cup, title: 'Всегда свежая обжарка', subtitle: 'Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка'},
        {svg: tiket, title: 'Лучшие цены на продукцию', subtitle: 'Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию'},
        {svg: consultation, title: 'Консультации 24/7', subtitle: 'Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.'},
    ]

    return (
        <section className='section-about'>
            <div style={{backgroundImage: `url(${bg})`}} className="section-about__bg"></div>
            <div style={{backgroundImage: `url(${bg2})`}} className="section-about__bg2"></div>
            <div style={{backgroundImage: `url(${bg3})`}} className="section-about__bg3"></div>
            
            <div className="container">
                <div className="section-about__why-inner">
                    <h2 className="section-about__why">Почему стоит работать именно с нами?</h2>
                </div>
                <div className="section-about__inner">
                    <CupCoffee />
                    <div className="section-about__info">
                        {
                            aboutItems.map(elem => <SelectAboutItem key={elem.title} {...elem}/>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;