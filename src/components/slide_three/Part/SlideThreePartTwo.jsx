import React from 'react';
import Organ from '../Organ'
import SlideStyle from '../SlideThree.module.css'
import style from './SlideThreePartTwo.module.css'
import B from '../../../assets/icon/β.png'
import musle from '../../../assets/icon/musle.png'
import liver from '../../../assets/icon/liver.png'
import brain from '../../../assets/icon/brain.png'
import kidney from '../../../assets/icon/kidney.png'
import lipid from '../../../assets/icon/lipid.png'


const SlideThreePartTwo = () => {
    return (
        <div className={style.partTwo}>
            <div className={SlideStyle.title}>Смертельный октет</div>
            <div className={style.subtitle}>Гипергликемия</div>
            <div className={style.defect}>
                <div className={style.container}>
                    <div className={style.defectName}>
                        Дефект α-клеток 
                    </div>
                    <div className={style.wrapper}>
                        <div className={style.defectNum}>3</div>
                    </div>
                </div>
            </div>
            <div className={style.effect}>
                <div className={style.container}>
                    <div className={style.effectName}>
                        Инкретиновый эффект   
                    </div>
                    <div className={style.wrapper}>
                        <div className={style.effectNum}>2</div>
                    </div>
                </div>
            </div>
            <div className={style.organB}>
                <Organ
                    number='1'
                    name='β-клетки'
                    img={B}
                    alt='β-клетки'/>
            </div>
            <div className={style.organMuscle}>
                <Organ
                    number='5'
                    name='Мышцы'
                    img={musle}
                    alt='Мышцы'/>
            </div>
            <div className={style.organLiver}>
                <Organ
                    number='6'
                    name='Печень'
                    img={liver}
                    alt='Печень'/>
            </div>
            <div className={style.organLipid}>
                <Organ
                    number='4'
                    name='Жировые клетки'
                    img={lipid}
                    alt='Жировые клетки'/>
            </div>
            <div className={style.organBrain}>
                <Organ
                    number='7'
                    name='Гловной мозг'
                    img={brain}
                    alt='Гловной мозг'/>
            </div>
            <div className={style.organKidney}>
                <Organ
                    number='8'
                    name='Почки'
                    img={kidney}
                    alt='Почки'/>
            </div>
            <div>
                <div className={`${style.line} ${style.lineOne}`}></div>
                <div className={`${style.line} ${style.lineTwo}`}></div>
                <div className={`${style.line} ${style.lineThree}`}></div>
                <div className={`${style.line} ${style.lineFour}`}></div>
                <div className={`${style.line} ${style.lineFife}`}></div>
                <div className={`${style.line} ${style.lineSix}`}></div>
                <div className={`${style.line} ${style.lineSeven}`}></div>
                <div className={`${style.line} ${style.lineEight}`}></div>
            </div>
        </div>
    )
}


export default SlideThreePartTwo

