import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../UI/Card/Card';
import HealthyEatingHeader from './header/HealthyEatingHeader';
import HealthyEatingitems from './items/HealthyEatingitems';

const HealthyEating = () => {

    useEffect(() => window.scroll(0, 0), [])

    return (

        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <HealthyEatingHeader />
                        <HealthyEatingitems />
                    </>
                } />
                <Route path='/:id' element={<Card props={'/healthy-eating'} />} />
            </Routes>

        </>
    );
};

export default HealthyEating;