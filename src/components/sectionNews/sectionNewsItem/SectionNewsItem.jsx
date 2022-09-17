import React from 'react';
import More from '../../UI/more/More';
import './SectionNewsItem.scss'

const SectionNewsItem = ({title, text}) => {
    return (
        <div className="section-news__content">
            <h3 className="news__content-title">{title}</h3>
            <p className="news__content-text">{text}</p>
            <More>Подробнее</More>
        </div>
    );
};

export default SectionNewsItem;