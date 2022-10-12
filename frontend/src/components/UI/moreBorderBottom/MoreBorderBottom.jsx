import React from 'react';
import './MoreBorderBottom.scss'

const MoreBorderBottom = ({className, children}) => {
    return (
        <p className={[className ,'MoreBorderBottom'].join(' ')}>
            {children}
        </p>
    );
};

export default MoreBorderBottom;