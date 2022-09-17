import React from 'react';
import SectionNewsItem from '../SectionNewsItem';
import './SectionNewsWith.scss'

const SectionNewsWith = ({imgItem}) => {
    return (
        <div className="section-news__item-with">
            <img src={imgItem} alt="imgItem" className="news__img" />
            <SectionNewsItem
                title='Танзанийский кофе. Откуда он взялся и почему мы его так любим?'
                text='Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.
                            Но наш интерес вызван не столько природными красотами, сколько кофе...'
            />
        </div>
    );
};

export default SectionNewsWith;