import React, { useState } from 'react';
import classes from './InstructionPage.module.scss'
import ImagesSvg from '../../blogImages/BlogImagesSvg.js'


const InstructionPage = () => {

    const [svgItem, setSvgItem] = useState()

    const [svgItems, setSvgItems] = useState([
        { imgSvg: ImagesSvg('Turk'), subTitle: 'Описание приготовления кофе в Турке', name: 'Турка', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('French press'), subTitle: 'Описание приготовления кофе в Френч-пресс', name: 'Френч-пресс', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('Moka'), subTitle: 'Описание приготовления кофе в Мока', name: 'Мока', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('Espresso'), subTitle: 'Описание приготовления кофе в Эспрессо', name: 'Эспрессо', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('Funnel'), subTitle: 'Описание приготовления кофе в Воронке', name: 'Воронка', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('Aeropress'), subTitle: 'Описание приготовления кофе в Аэропрессе', name: 'Аэропресс', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('Cup'), subTitle: 'Описание приготовления кофе в Чашке', name: 'Чашка', ClassesName: classes.nav__item },
        { imgSvg: ImagesSvg('Machine'), subTitle: 'Описание приготовления кофе в Автомате', name: 'Автомат', ClassesName: classes.nav__item }
    ])

    const clickHeandler = (imgSvg, subTitle, name, ClassesName) => {
        
        const temp = [...svgItems].filter(elem => elem.name === name)
        setSvgItems([...svgItems].map(elem => {
            if (elem.name === temp[0].name) {
                return {imgSvg, subTitle, name, ClassesName: [classes.nav__item, classes.nav__item_active].join(' ')}
            }
            elem.ClassesName = [classes.nav__item]
            return elem
        }))
        setSvgItem({imgSvg, subTitle, name})
    }

    return (
        <div>
            <h2 className={classes.title}>Приготовление кофе разными способами</h2>
            <div className={classes.nav}>
                {

                    svgItems.map((elem, index) => {
                        return <div key={index} onClick={() => clickHeandler(elem.imgSvg, elem.subTitle, elem.name, elem.ClassesName)} className={elem.ClassesName}>
                            <p className={classes.nav__item_title}>{elem.name}</p>
                            {elem.imgSvg}
                        </div>
                    })
                }
            </div>
            {
                svgItem?
                    <>
                        <h3 className={classes.nav__title}>Как сварить кофе в {svgItem.name}:</h3>
                        <p className={classes.nav__subtitle}>
                            {svgItem.subTitle}
                        </p>
                    </>
                : 
                <h1 className={classes.ifNot}>способ приготовления не выбран</h1>
            }

        </div>
    );
};

export default InstructionPage;