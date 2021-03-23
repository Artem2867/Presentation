import React from 'react';
import Organ from '../Organ'
import SlideStyle from '../SlideThree.module.css'
import style from './SlideThreePartThree.module.css'
import B from '../../../assets/icon/β.png'
import musle from '../../../assets/icon/musle.png'
import liver from '../../../assets/icon/liver.png'
import brain from '../../../assets/icon/brain.png'
import kidney from '../../../assets/icon/kidney.png'
import lipid from '../../../assets/icon/lipid.png'
import intestines from '../../../assets/icon/intestines.png'
import infection from '../../../assets/icon/infection.png'
import stomach from '../../../assets/icon/stomach.png'


const SlideThreePartThree = () => {
    return (
        <div className={style.partThree}>
            <div className={SlideStyle.title}>Звенья патогенеза СД2</div>
            <div className={style.subtitle}>Гипергликемия</div>
            <div className={style.defect}>
                <div className={style.defectNum}>3</div>
                <div className={style.defectName}>
                    Дефект α-клеток 
                </div> 
                <div className={style.defectArrow}></div>
            </div>
            <div className={style.effect}>
                <div className={style.effectArrow}></div>
                <div className={style.container}>
                    <div className={style.effectNum}>2</div>
                    <div className={style.effectName}>
                        Инкретиновый эффект   
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
            <div className={style.organBrain}>
                <Organ
                    number='7'
                    name='Гловной мозг'
                    img={brain}
                    alt='Гловной мозг'/>
            </div>
            <div className={style.organIntestines}>
                <Organ
                    number='8'
                    name='Микрофлора кишечника'
                    img={intestines}
                    alt='Микрофлора кишечника'/>
            </div>
            <div className={style.group}>
                <div className={style.groupTitle}>
                    Инсулинорезистентность
                </div>
                <div className={style.organLiver}>
                    <Organ
                        number='6'
                        name='Печень'
                        img={liver}
                        alt='Печень'/>
                </div>
                <div className={style.organMuscle}>
                    <Organ
                        number='5'
                        name='Мышцы'
                        img={musle}
                        alt='Мышцы'/>
                </div>
                <div className={style.organLipid}>
                    <Organ
                        number='4'
                        name='Жировые клетки'
                        img={lipid}
                        alt='Жировые клетки'/>
                </div>
            </div>
            <div className={style.organKidney}>
                <Organ
                    number='11'
                    name='Почки'
                    img={kidney}
                    alt='Почки'/>
            </div>
            <div className={style.organInfection}>
                <Organ
                    number='9'
                    name='Нарущшение иммунной регуляции/восполения'
                    img={infection}
                    alt='Нарущшение иммунной регуляции/восполения'/>
            </div>
            <div className={style.organStomach}>
                <Organ
                    number='10'
                    name='Желудок'
                    img={stomach}
                    alt='Желудок'/>
            </div>
            <div>
                <div className={style.amilin}>
                    <div className={style.amilinName}>
                        амилин
                    </div>
                    <div className={style.amilinArrow}></div>
                </div>
                <div className={style.glukon}>
                    <div className={style.glukonName}>
                        глюкагон
                    </div>
                    <div className={style.glukonArrow}></div>
                </div>
                <div className={`${style.line} ${style.lineOne}`}></div>
                <div className={`${style.line} ${style.lineTwo}`}></div>
                <div className={`${style.line} ${style.lineThree}`}></div>
                <div className={`${style.line} ${style.lineFour}`}></div>
                <div className={`${style.line} ${style.lineFife}`}></div>
                <div className={`${style.line} ${style.lineSix}`}></div>
                <div className={`${style.line} ${style.lineSeven}`}></div>
                <div className={`${style.line} ${style.lineEight}`}></div>
                <div className={`${style.line} ${style.lineNine}`}></div>
                <div className={`${style.line} ${style.lineTen}`}></div>
                <div className={`${style.line} ${style.lineEleven}`}></div>
                <div className={`${style.line} ${style.lineTwelve}`}></div>
                <div className={`${style.line} ${style.lineThirteen}`}></div>
                <div className={`${style.line} ${style.lineFourteen}`}></div>
                <div className={`${style.line} ${style.lineFifteen}`}></div>
                <div className={`${style.line} ${style.lineSixteen}`}></div>
                <div className={`${style.line} ${style.lineSeventeen}`}></div>
                <div className={`${style.line} ${style.lineEightteen}`}></div>
                <div className={`${style.line} ${style.lineNineteen}`}></div>
                <div className={`${style.line} ${style.lineTwenty}`}></div>
                <div className={`${style.line} ${style.lineTwentyOne}`}></div>
                <div className={`${style.line} ${style.lineTwentyTwo}`}></div>
            </div>
        </div>
    )
}


export default SlideThreePartThree


