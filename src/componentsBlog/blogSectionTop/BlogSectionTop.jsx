import React, { useEffect, useState } from 'react';
import MyBtn from '../UI/btn/MyBtn';
import './BlogSectionTop.scss'
import BlogNewsPage from '../blogPage/blogNewsPage/BlogNewsPage.jsx';
import InstructionPage from '../blogPage/instructionPage/InstructionPage.jsx';
import QuestionsPage from '../blogPage/questionsPage/QuestionsPage.jsx';

const BlogSectionTop = () => {

    const [indexActive, setIndexActive] = useState(0)

    const btnListItems = [
        { title: 'Обучение', component: <InstructionPage /> },
        { title: 'Новости', component: <BlogNewsPage /> },
        { title: 'Частые вопросы', component: <QuestionsPage /> }
    ]

    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    const onClickHandler = (i) => {
        setIndexActive(i)
    }

    return (
        <section className='sectionTop_blog'>
            <div className="container">
                <div className='sectionTop_blog_pages'>
                    <h3 className='sectionTop_blog_pages_title'>Главная<span>Блог</span></h3>
                </div>
                <div className='sectionTop_blog_btns'>
                    {
                        btnListItems.map((elem, i) => {
                            return <MyBtn
                                key={i}
                                indexActive={indexActive}
                                index={i}
                                onClick={onClickHandler}
                                {...elem}
                            />
                        })
                    }

                </div>
                {btnListItems[indexActive].component}
            </div>

        </section>
    );
};


export default BlogSectionTop;