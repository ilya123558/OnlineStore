import React from 'react';
import './FooterTop.scss'


const FooterTop = () => {
    return (
        <div className="footer-top">
            <h2 className="footer-title">Подписка на новости и рассылку</h2>
            <p className="footer-text">
                Подпишитесь на нашу рассылку прямо сейчас и
                будьте в курсе новых поставок, скидок и эксклюзивных предложений.
            </p>
            <div className="footer-subscribe">
                <input type="text" className="footer-subscribe__input" placeholder="Ваш email"></input>
                <button className="btn footer-subscribe__btn">Подписаться</button>
            </div>
            <p className="footer-agreed">
                Нажимая на кнопку “Подписаться”, вы принимаете правила
                <span className="footer-agreed__span"> пользовательского соглашения</span>
            </p>
        </div>
    );
};

export default FooterTop;