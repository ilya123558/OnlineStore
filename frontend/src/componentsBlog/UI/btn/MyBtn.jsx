import React from 'react';

const MyBtn = (props) => {

    return (
        <button onClick={() => props.onClick(props.index)} className={props.indexActive === props.index ? 'BlogBtnActive' : 'BlogBtn'}>
            {props.title}
        </button>
    );
};

export default MyBtn;