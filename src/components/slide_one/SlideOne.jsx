import React from 'react';
import NextSlide from '../next_slide/NextSlide';
import ContentItem from './ContentItem';
import style from './SlideOne.module.css'
import animationLogicPage, {movePageUp, removeClassActive, addClassActive} from '../../animationLogic/animationLogicPage.js'



const SlideOne = () => {
    const nextPage = () => {
        let i = 0
        movePageUp(0, i)
        removeClassActive('roundOne')
        addClassActive('roundTwo')
    }
    return (
        <div className={style.slide_one} onTouchStart={animationLogicPage} id='1'>
            <div className={style.title}>Всегда ли цели терапии СД2 <br/> на поверхности?</div>
            <div className={style.name_one}> 
                <ContentItem name='Цель по HbA1c'/>
            </div>
            <div className={style.name_two}>
                <ContentItem name='Гипогликемия'/>
            </div>
            <div className={style.name_three}>
                <ContentItem name='Осложнения СД'/>
            </div>
            <div className={style.name_four}>
                <ContentItem name='СС риски'/>
            </div>
            <div className={style.next_slide} onTouchStart={nextPage}>
                <NextSlide/>
            </div>
        </div>
    )
} 


export default SlideOne