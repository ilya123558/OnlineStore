import React from 'react';

const MyCardItem = ({title, mass}) => {
    return (
        <div className="cardItem__inner">
            <p >{title}</p>
            <div className='cardItem'>
                {
                    mass.map((elem, index) => {
                        return(
                            <div key={index}>{elem}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyCardItem;

