import React, { useRef } from 'react';
import NextSlide from '../next_slide/NextSlide';
import style from './SlideTwo.module.css'
import animationLogicPage, {nextPage} from '../../animationLogic/animationLogicPage.js'


const SlideTwo = ({pagination}) => {
    const refSlide = useRef(null)
    return (
        <div className={style.slideTwo} ref={refSlide} onTouchStart={(e) => animationLogicPage(e, refSlide, pagination)} id='2'>
            <div className={style.title}>Основа терапии - патогенез СД2</div>
            <div className={style.nextSlide} onTouchStart={() => nextPage(1536, pagination.roundThree, pagination.roundTwo)}>
                <NextSlide/>
            </div>
        </div>
    )
}



export default SlideTwo