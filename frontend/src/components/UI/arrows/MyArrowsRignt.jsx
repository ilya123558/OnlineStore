import React from 'react';
import './MyArrows.scss'
import { ReactComponent as ArrowRight } from '../../../images/section-discount/arrowRight.svg'

const MyArrowsRight = ({ onClick }) => {
    return (
        <button onClick={onClick} className="slider-arr slider-next">
            <ArrowRight/>
        </button>
    );
};

export default MyArrowsRight;