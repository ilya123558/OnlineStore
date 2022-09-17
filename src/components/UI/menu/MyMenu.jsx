import React from 'react';
import './MyMenu.scss'
import { Link } from 'react-router-dom'


const MyMenu = ({className}) => {

    return (
        <ul className={[className, "nav"].join(' ')}>
            <li className="nav-item"><Link to='/catalog'>Каталог товаров</Link></li>
            <li className="nav-item"><Link to='/blog'>Блог</Link></li>
            <li className="nav-item"><Link to='/contacts'>Контакты</Link></li>
        </ul>
    );
};

export default MyMenu;