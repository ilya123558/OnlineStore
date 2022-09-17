import React from 'react';
import FooterApp from './components/footer/FooterApp';
import HeaderApp from './components/header/HeaderApp';
import RoutesApp from './routes/RoutesApp';
import s from './App.module.scss'

const App = () => {
    return (
        <section className={s.inner}>
            <HeaderApp />
            <RoutesApp/>
            <FooterApp />
        </section>
    );
};

export default App;