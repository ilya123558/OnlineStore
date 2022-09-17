import React, { useEffect } from 'react';
import RoastedСoffeeHeader from './header/RoastedСoffeeHeader'
import RoastedСoffeeSort from './sort/RoastedСoffeeSort'
import RoastedСoffeeItems from './roastedСoffeeItems/RoastedСoffeeItems'
import Card from '../UI/Card/Card'
import { Route, Routes } from 'react-router-dom';

const RoastedСoffee = () => {

    useEffect(() => window.scroll(0, 0), [])

    return (
        <Routes>
            <Route path='/' element={
                <>
                    <RoastedСoffeeHeader />
                    <RoastedСoffeeSort />
                    <RoastedСoffeeItems />
                </>
            } />
            <Route path='/:id' element={<Card props={'/roasted'}/>} />
        </Routes>
    );
};

export default RoastedСoffee;