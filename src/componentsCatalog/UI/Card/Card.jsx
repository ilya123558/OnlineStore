import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './Card.module.scss'
import { fetchCard } from '../../../redux/card/cardInner';
import { useSelector } from 'react-redux';
import CardInfo from './CardInfo/CardInfo'
import bgForItem from '../../../images/roastedСoffee/header/bgForItem.png'

const Card = ({ props }) => {

    const dispatch = useDispatch()
    const item = useSelector(state => state.cardInner.card)
    const status = useSelector(state => state.cardInner.status)
    const titleMass = ['Главная', 'Каталог товаров', item.typePage, item.title]
    const { id } = useParams()
    const link = `${props}/${id}`


    useEffect(() => {
        dispatch(fetchCard(link))
        window.scroll(0, 0)
    }, [link, dispatch])

    return (
        <section className={s.section}>
            <div style={{ 'backgroundImage': `url(${bgForItem})` }} className={s.bg}></div>
            <div className='container'>
                {
                    status === 'loading'
                        ?
                        <div>loading...</div>
                        :
                        <>
                            <div className={s.titleInner}>
                                <p>
                                    {
                                        titleMass.map((elem, index) => {
                                            return <span key={index} className={index !== 3 ? s.span : ''}>{elem}</span>
                                        })
                                    }
                                </p>
                            </div>


                            <div style={{ 'position': 'relative' }}>
                                <CardInfo {...item} />
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default Card;