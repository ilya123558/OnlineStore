import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../UI/Card/Card';
import TeaAndCoffeeHeader from './header/TeaAndCoffeeHeader';
import TeaAndCoffeeItems from './teaAndCoffeeItems/TeaAndCoffeeItems.jsx';

const TeaAndCoffee = () => {

    return (

        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <TeaAndCoffeeHeader />
                        <TeaAndCoffeeItems />
                    </>
                } />
                <Route path='/:id' element={<Card props={'/tea-and-coffee'} />} />
            </Routes>

        </>
    );
};

export default TeaAndCoffee;