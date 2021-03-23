import React, { useRef } from 'react';
import SlideThreePartOne from './Part/SlideThreePartOne';
import SlideThreePartThree from './Part/SlideThreePartThree';
import SlideThreePartTwo from './Part/SlideThreePartTwo';
import SlideYears from './SlideThreeYears';
import style from './SlideThree.module.css'
import animationLogicPage from '../../animationLogic/animationLogicPage.js'


const SlideThree = ({pagination}) => {
    const refSlide = useRef(null)
    const yearcSlideConteiner = useRef()
    return (
        <div className={style.slideThree} ref={refSlide} onTouchStart={(e) => animationLogicPage(e, refSlide,pagination)} id='3'>
            <div className={style.slider}>
                <div className={style.container} ref={yearcSlideConteiner}>
                    <SlideThreePartOne/>
                    <SlideThreePartTwo/>
                    <SlideThreePartThree/>
                </div>
            </div>
            <SlideYears yearcSlideConteiner={yearcSlideConteiner}/>
        </div>
    )
}

export default SlideThree