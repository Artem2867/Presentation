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
        <div className={style.part_two}>
            <div className={SlideStyle.title}>Смертельный октет</div>
            <div className={style.subtitle}>Гипергликемия</div>
            <div className={style.defect}>
                <div className={style.container}>
                    <div className={style.defect_name}>
                        Дефект α-клеток 
                    </div>
                    <div className={style.wrapper}>
                        <div className={style.defect_num}>3</div>
                    </div>
                </div>
            </div>
            <div className={style.effect}>
                <div className={style.container}>
                    <div className={style.effect_name}>
                        Инкретиновый эффект   
                    </div>
                    <div className={style.wrapper}>
                        <div className={style.effect_num}>2</div>
                    </div>
                </div>
            </div>
            <div className={style.organ_b}>
                <Organ
                    number='1'
                    name='β-клетки'
                    img={B}
                    alt='β-клетки'/>
            </div>
            <div className={style.organ_muscle}>
                <Organ
                    number='5'
                    name='Мышцы'
                    img={musle}
                    alt='Мышцы'/>
            </div>
            <div className={style.organ_liver}>
                <Organ
                    number='6'
                    name='Печень'
                    img={liver}
                    alt='Печень'/>
            </div>
            <div className={style.organ_lipid}>
                <Organ
                    number='4'
                    name='Жировые клетки'
                    img={lipid}
                    alt='Жировые клетки'/>
            </div>
            <div className={style.organ_brain}>
                <Organ
                    number='7'
                    name='Гловной мозг'
                    img={brain}
                    alt='Гловной мозг'/>
            </div>
            <div className={style.organ_kidney}>
                <Organ
                    number='8'
                    name='Почки'
                    img={kidney}
                    alt='Почки'/>
            </div>
            <div>
                <div className={`${style.line} ${style.line_one}`}></div>
                <div className={`${style.line} ${style.line_two}`}></div>
                <div className={`${style.line} ${style.line_three}`}></div>
                <div className={`${style.line} ${style.line_four}`}></div>
                <div className={`${style.line} ${style.line_fife}`}></div>
                <div className={`${style.line} ${style.line_six}`}></div>
                <div className={`${style.line} ${style.line_seven}`}></div>
                <div className={`${style.line} ${style.line_eight}`}></div>
            </div>
        </div>
    )
}


export default SlideThreePartTwo

