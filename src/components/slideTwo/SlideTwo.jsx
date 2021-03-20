import React from 'react';
import NextSlide from '../next_slide/NextSlide';
import style from './SlideTwo.module.css'
import animationLogicPage, {movePageUp, removeClassActive, addClassActive} from '../../animationLogic/animationLogicPage.js'


const SlideTwo = () => {
    const nextPage = () => {
        let i = 0
        movePageUp(768, i)
        removeClassActive('roundTwo')
        addClassActive('roundThree')
    }
    return (
        <div className={style.slide_two} onTouchStart={animationLogicPage} id='2'>
            <div className={style.title}>Основа терапии - патогенез СД2</div>
            <div className={style.next_slide} onTouchStart={nextPage}>
                <NextSlide/>
            </div>
        </div>
    )
}


export default SlideTwo