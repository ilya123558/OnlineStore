import React from 'react';
import s from './CardInfo.module.scss'
import CardInfoDesc from './CardInfoDesc/CardInfoDesc'


const CardInfo = (props) => {

    return (
        <div className={s.inner}>
            <div className={s.imgInner}><img className={s.img} src={props.imgFull} alt="img" /></div>
            <CardInfoDesc {...props} />
        </div>
    );
}

export default CardInfo; 