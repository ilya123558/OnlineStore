import React from 'react';
import coffee from '../../../images/UI/coffee.png'
import cafe from '../../../images/UI/cafe.png'
import cafe2 from '../../../images/UI/cafe-2.png'
import './MyCoffee.scss'
const MyCoffee = ({ className }) => {

    if (className === 'section-top__coffee') {
        return (
            <div className={[className, "coffee"].join(' ')}>
                <img className='coffee-cafe' src={cafe2} alt="cafe2" />
                <img className='coffee-coffee coffee-coffee2' src={coffee} alt="coffee" />
            </div>
        )
    }

    return (
        <div className={[className, "coffee"].join(' ')}>
            <img className='coffee-cafe' src={cafe} alt="cafe" />
            <img className='coffee-coffee' src={coffee} alt="coffee" />
        </div>
    );
};

export default MyCoffee;