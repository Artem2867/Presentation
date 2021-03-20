import React from 'react';
import Organ from '../Organ';
import SlideStyle from '../SlideThree.module.css'
import style from './SlideThreePartOne.module.css'
import B from '../../../assets/icon/β.png'
import liver from '../../../assets/icon/liver.png'
import musle from '../../../assets/icon/musle.png'



const SlideThreePartOne = () => {
    return (
        <div className={style.part_one}>
            <div className={SlideStyle.title}>Звенья патогенеза СД2</div>
            <div className={style.subtitle}>Гипергликемия</div>
            <div className={style.organ_b}>
                <Organ
                    number='1'
                    name='β-клетки'
                    img={B}
                    alt='β-клетки'/>
            </div>
            <div className={style.organ_muscle}>
                <Organ
                    number='2'
                    name='Мышцы'
                    img={musle}
                    alt='Мышцы'/>
            </div>
            <div className={style.organ_liver}>
                <Organ
                    number='3'
                    name='Печень'
                    img={liver}
                    alt='Печень'/>
            </div>
            <div>
                <div className={`${style.line} ${style.line_one}`}></div>
                <div className={`${style.line} ${style.line_two}`}></div>
                <div className={`${style.line} ${style.line_three}`}></div>
                <div className={`${style.line} ${style.line_four}`}></div>
                <div className={`${style.line} ${style.line_fife}`}></div>
            </div>
        </div>
    )
}


export default SlideThreePartOne
