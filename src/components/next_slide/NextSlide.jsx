import React from 'react';
import style from './NextSlide.module.css'
import nextArrow from '../../assets/icon/NextSlideArrow.png'
import nextSlideFire from '../../assets/image/NextSlideFire.png'

const NextSlide = () => {
    return (
        <div className={style.nextSlide}>
            <div className={style.conteiner}>
                <div className={style.title}>Листайте вниз</div>
                <div className={style.arrow} >
                    <img src={nextArrow} alt='nextArrow'/>
                </div>
            </div>
            <div className={style.fire}>
                <img src={nextSlideFire} alt='nextSlideFire'/>
            </div>
        </div>
    )
}


export default NextSlide; 