import React from 'react';
import cup from '../../../images/section-about/cupCoffee.png'
import coffee from '../../../images/section-about/coffee.png'
import './CupCoffee.scss'

const CupCoffee = () => {
    return (
        <div className="cupCoffee">
            <img src={coffee} alt="coffee" className="cupCoffee__coffee" />
            <img src={cup} alt="cup" className="cupCoffee__cup" />
        </div>
    );
};

export default CupCoffee;