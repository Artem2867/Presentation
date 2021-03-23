import React from 'react';
import Organ from '../Organ';
import SlideStyle from '../SlideThree.module.css'
import style from './SlideThreePartOne.module.css'
import B from '../../../assets/icon/β.png'
import liver from '../../../assets/icon/liver.png'
import musle from '../../../assets/icon/musle.png'



const SlideThreePartOne = () => {
    return (
        <div className={style.partOne}>
            <div className={SlideStyle.title}>Звенья патогенеза СД2</div>
            <div className={style.subtitle}>Гипергликемия</div>
            <div className={style.organB}>
                <Organ
                    number='1'
                    name='β-клетки'
                    img={B}
                    alt='β-клетки'/>
            </div>
            <div className={style.organMuscle}>
                <Organ
                    number='2'
                    name='Мышцы'
                    img={musle}
                    alt='Мышцы'/>
            </div>
            <div className={style.organLiver}>
                <Organ
                    number='3'
                    name='Печень'
                    img={liver}
                    alt='Печень'/>
            </div>
            <div>
                <div className={`${style.line} ${style.lineOne}`}></div>
                <div className={`${style.line} ${style.lineTwo}`}></div>
                <div className={`${style.line} ${style.lineThree}`}></div>
                <div className={`${style.line} ${style.lineFour}`}></div>
                <div className={`${style.line} ${style.lineFife}`}></div>
            </div>
        </div>
    )
}


export default SlideThreePartOne
