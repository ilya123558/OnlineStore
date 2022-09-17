import React, { useEffect } from 'react';
import MyCard from '../../UI/roastedСoffee/MyCard';
import './Discount.scss'
import MoreBorderBottom from '../../UI/moreBorderBottom/MoreBorderBottom';
import Slider from "react-slick";
import MyArrowsRight from '../../UI/arrows/MyArrowsRignt';
import MyArrowsLeft from '../../UI/arrows/MyArrowsLeft';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoastedСoffee } from '../../../redux/cards/roastedСoffee'
import { Link } from 'react-router-dom';

const Discount = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.roastedСoffee.status)
    const roastedСoffeeCardList = useSelector(state => state.roastedСoffee.roastedСoffeeCardListDiscount)

    useEffect(() => {
        dispatch(fetchRoastedСoffee())
    }, [dispatch])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <MyArrowsRight />,
        prevArrow: <MyArrowsLeft className='left' />
    };

    return (
        <div className="section-discount__inner">
            <div className="container">
                <div className="section-discount__items">
                    {
                        status === 'loading' ? <h1>loading...</h1> :
                            <Slider {...settings} className='slider-wrap'>
                                {
                                    roastedСoffeeCardList && roastedСoffeeCardList.map((elem) => {
                                        return (
                                            <div key={elem.id}>
                                                <MyCard {...elem} discountPath />
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                    }
                </div>
                <div className="section-discount__inner-btn">
                    <Link to='/catalog/roasted-coffee'>
                        <MoreBorderBottom className="section-discount__more">Смотреть все</MoreBorderBottom>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Discount;