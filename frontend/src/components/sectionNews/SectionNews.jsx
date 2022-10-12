import React from 'react';
import MoreBorderBottom from '../UI/moreBorderBottom/MoreBorderBottom';
import './SectionNews.scss'
import imgItem from '../../images/section-news/image.png'
import bg from '../../images/section-news/bg.png'
import bg2 from '../../images/section-news/bg2.png'
import SectionNewsWith from './sectionNewsItem/sectionNewsWith/SectionNewsWith';
import SectionNewsNot from './sectionNewsItem/sectionNewsNot/SectionNewsNot';
import { Link } from 'react-router-dom';

const SectionNews = () => {
    return (
        <section className="section-news">
            <div style={{ backgroundImage: `url(${bg})` }} className="section-news__bg"></div>
            <div style={{ backgroundImage: `url(${bg2})` }} className="section-news__bg2"></div>
            <div style={{ backgroundImage: `url(${bg})` }} className="section-news__bg3"></div>
            <div className="section-news__bg2"></div>
            <div className="container">
                <div className="section-news__top">
                    <h2 className="section-news__title">Новости компании</h2>
                    <Link to='/blog'>
                        <MoreBorderBottom>Читать все</MoreBorderBottom>
                    </Link>
                </div>

                <div className="section-news__items">
                    <SectionNewsWith imgItem={imgItem} />
                    <SectionNewsNot />
                </div>
                <div className="section-news__items">
                    <SectionNewsNot />
                    <SectionNewsWith imgItem={imgItem} />

                </div>
            </div>
        </section>
    );
};

export default SectionNews;