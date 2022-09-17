import React from 'react';
import './MyArrows.scss'

import { ReactComponent as ArrowLeft } from '../../../images/section-discount/arrowLeft.svg'
const MyArrowsLeft = ({ onClick }) => {
    return (
        <button onClick={onClick} className="slider-arr slider-prev">
            <ArrowLeft />
        </button>
    );
};

export default MyArrowsLeft;