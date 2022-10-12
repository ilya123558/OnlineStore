import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import Profile from '../componentsProfile/Profile';
import ContactsPage from '../pages/ContactsPage';
import NewsPage from '../pages/NewsPage';
import СatalogPage from '../pages/СatalogPage';
import Basket from '../componentsBasket/Basket';



const RoutesApp = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog/*' element={<BlogPage /> } />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/catalog/*' element={<СatalogPage />} />
        </Routes>
    );
};

export default RoutesApp;