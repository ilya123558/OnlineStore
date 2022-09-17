import React from 'react';
import './DiscountDiscription.scss'

const DiscountDiscription = () => {
    return (
        <div className="container">
            <div className="section-discount__description">
                <div className='section-discount__description-inner'>
                    <h2 className="section-discount__title">Товары со скидкой</h2>
                    <p className="section-discount__text">
                        Наша компания предлагает покупать товар со скидкой не только в дни распродаж
                        или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DiscountDiscription;