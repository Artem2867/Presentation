import React from 'react';
import SlideThreePartOne from './Part/SlideThreePartOne';
import SlideThreePartThree from './Part/SlideThreePartThree';
import SlideThreePartTwo from './Part/SlideThreePartTwo';
import SlideYears from './SlideThreeYears';
import style from './SlideThree.module.css'
import animationLogicPage from '../../animationLogic/animationLogicPage.js'


const SlideThree = () => {
    return (
        <div className={style.slide_three} onTouchStart={animationLogicPage} id='3'>
            <div className={style.slider}>
                <div className={style.container} id='years_slide_conteiner'>
                    <SlideThreePartOne/>
                    <SlideThreePartTwo/>
                    <SlideThreePartThree/>
                </div>
            </div>
            <SlideYears/>
        </div>
    )
}

export default SlideThree