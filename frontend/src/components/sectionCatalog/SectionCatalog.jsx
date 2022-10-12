import React from 'react';
import './SectionCatalog.scss'
import coffee from '../../images/section-catalog/coffee.png'
import goodEat from '../../images/section-catalog/good-eat.png'
import prod from '../../images/section-catalog/prod.png'
import tea from '../../images/section-catalog/tea.png'
import cafe from '../../images/section-catalog/cafe.png'
import vector2 from '../../images/section-catalog/vector2.png'
import SectionCatalogItem from './sectionCatalogItem/SectionCatalogItem';

const SectionCatalog = () => {

    const catalogItems = [
        {img: coffee, title: 'Свежеобжаренный кофе', href: '/catalog/roasted-coffee'},
        {img: tea, title: 'Чай и кофейные напитки', href: '/catalog/tea-and-coffee'},
        {img: prod, title: 'Продукция для вендинга', href: '/catalog/for-mending'},
        {img: goodEat, title: 'Здоровое питание', href: '/catalog/healthy-eating'}
    ]
    
    return (
        <section className="section-catalog">
            <img src={vector2} alt="vector2" className="section-catalog__vector2" />
            <img src={cafe} alt="cafe" className="section-catalog__cafe" />
            <div className="container">
                <h2 className="section-catalog__title">Каталоги нашей продукции</h2>
                <div className="catalog">
                    {
                        catalogItems.map(elem => <SectionCatalogItem key={elem.title} titleImg={elem.img} title={elem.title} href={elem.href} />)
                    }
                </div>
            </div>
            

        </section>
    );
};

export default SectionCatalog;