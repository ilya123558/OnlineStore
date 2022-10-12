import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div style={{ 'margin': '300px auto 0px' }}>
            <div className="container">
                <h1 style={{ 'margin': '10px 0px' }}>Error</h1>
                <button><Link to='/'><h1>Вернуться на главную</h1></Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;