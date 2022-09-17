import React from 'react';

const SelectAboutItem = ({ svg, title, subtitle }) => {
    return (
        <div className="section-about__items">
            <div className="section-about__icon">
                <img src={svg} alt="cup" />
            </div>
            <div className="section-about__text">
                <h3 className="section-about__title">{title}</h3>
                <p className="section-about__subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default SelectAboutItem;