import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HealthyEating from '../componentsCatalog/healthyEating/HealthyEating';
import MainCatalog from '../componentsCatalog/main/MainCatalog'
import ForМending from '../componentsCatalog/forМending/ForМending'
import TeaAndCoffee from '../componentsCatalog/teaAndCoffee/TeaAndCoffee'
import RoastedСoffee from '../componentsCatalog/roastedСoffee/RoastedСoffee'
import ErrorPage from './ErrorPage';

const СatalogPage = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<MainCatalog />} />
                <Route path='/roasted-coffee/*' element={<RoastedСoffee />} />
                <Route path='/tea-and-coffee/*' element={<TeaAndCoffee />} />
                <Route path='/for-mending/*' element={<ForМending />} />
                <Route path='/healthy-eating/*' element={<HealthyEating />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default СatalogPage;