import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Card from '../UI/Card/Card';
import ForМendingHeader from './forМendingHeader/ForМendingHeader'
import ForМendingItems from './forМendingItems/ForМendingItems'

const ForМending = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <ForМendingHeader />
                    <ForМendingItems />
                </>
            } />
            <Route path='/:id' element={<Card props={'/for-mending'} />} />
        </Routes>
    );
};

export default ForМending;