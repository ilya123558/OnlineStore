import React from 'react';
import './SectionInfo.scss'
import bg from '../../images/section-info/bg.png'
import bg2 from '../../images/section-info/bg2.png'
import { Link } from 'react-router-dom';

const SectionInfo = () => {
    return (
        <section className='section-info'>
            <div style={{ backgroundImage: `url(${bg})` }} className="section-info__bg"></div>
            <div style={{ backgroundImage: `url(${bg2})` }} className="section-info__bg2"></div>
            <div className="container">
                <h2 className="section-info__title">Как мы обжариваем наш кофе:</h2>
                <p className="section-info__text">
                    Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
                    в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
                    для производства растворимой продукции.
                    <br />
                    <br />
                    Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом.
                    У нас свой подход к каждой партии зерна.
                    <br />
                    <br />
                    Мы раскрываем вкус каждого сорта кофе.
                </p>

                <Link to='/blog'>
                    <button className='section-info__btn'>Перейти в каталог</button>
                </Link>
            </div>
        </section>
    );
};

export default SectionInfo;