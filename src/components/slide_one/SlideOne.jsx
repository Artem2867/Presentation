import React, { useRef } from 'react';
import NextSlide from '../next_slide/NextSlide';
import ContentItem from './ContentItem';
import style from './SlideOne.module.css'
import animationLogicPage, {nextPage} from '../../animationLogic/animationLogicPage.js'



const SlideOne = ({pagination}) => {
    const refSlide = useRef(null)
    return (
        <div className={style.slideOne} ref={refSlide} onTouchStart={(e) => animationLogicPage(e, refSlide, pagination)} id='1'>
            <div className={style.title}>Всегда ли цели терапии СД2 <br/> на поверхности?</div>
            <div className={style.nameOne}> 
                <ContentItem name='Цель по HbA1c'/>
            </div>
            <div className={style.nameTwo}>
                <ContentItem name='Гипогликемия'/>
            </div>
            <div className={style.nameThree}>
                <ContentItem name='Осложнения СД'/>
            </div>
            <div className={style.nameFour}>
                <ContentItem name='СС риски'/>
            </div>
            <div className={style.nextSlide} onTouchStart={() => nextPage(768, pagination.roundTwo, pagination.roundOne)}>
                <NextSlide/>
            </div>
        </div>
    )
} 


export default SlideOne