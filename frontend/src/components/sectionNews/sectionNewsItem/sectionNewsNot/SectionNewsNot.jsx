import React from 'react';
import SectionNewsItem from '../SectionNewsItem';
import './SectionNewsNot.scss'

const SectionNewsNot = () => {
    return (
        <div className="section-news__item">
            <div className="section-news__blok"></div>
            <SectionNewsItem
                title='Африканский кофе Кения АА'
                text='Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире.
                                 Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.'
            />
        </div>
    );
};

export default SectionNewsNot;