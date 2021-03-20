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
        <div className={style.part_three}>
            <div className={SlideStyle.title}>Звенья патогенеза СД2</div>
            <div className={style.subtitle}>Гипергликемия</div>
            <div className={style.defect}>
                <div className={style.defect_num}>3</div>
                <div className={style.defect_name}>
                    Дефект α-клеток 
                </div> 
                <div className={style.defect_arrow}></div>
            </div>
            <div className={style.effect}>
                <div className={style.effect_arrow}></div>
                <div className={style.container}>
                    <div className={style.effect_num}>2</div>
                    <div className={style.effect_name}>
                        Инкретиновый эффект   
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
            <div className={style.organ_brain}>
                <Organ
                    number='7'
                    name='Гловной мозг'
                    img={brain}
                    alt='Гловной мозг'/>
            </div>
            <div className={style.organ_intestines}>
                <Organ
                    number='8'
                    name='Микрофлора кишечника'
                    img={intestines}
                    alt='Микрофлора кишечника'/>
            </div>
            <div className={style.group}>
                <div className={style.group_title}>
                    Инсулинорезистентность
                </div>
                <div className={style.organ_liver}>
                    <Organ
                        number='6'
                        name='Печень'
                        img={liver}
                        alt='Печень'/>
                </div>
                <div className={style.organ_muscle}>
                    <Organ
                        number='5'
                        name='Мышцы'
                        img={musle}
                        alt='Мышцы'/>
                </div>
                <div className={style.organ_lipid}>
                    <Organ
                        number='4'
                        name='Жировые клетки'
                        img={lipid}
                        alt='Жировые клетки'/>
                </div>
            </div>
            <div className={style.organ_kidney}>
                <Organ
                    number='11'
                    name='Почки'
                    img={kidney}
                    alt='Почки'/>
            </div>
            <div className={style.organ_infection}>
                <Organ
                    number='9'
                    name='Нарущшение иммунной регуляции/восполения'
                    img={infection}
                    alt='Нарущшение иммунной регуляции/восполения'/>
            </div>
            <div className={style.organ_stomach}>
                <Organ
                    number='10'
                    name='Желудок'
                    img={stomach}
                    alt='Желудок'/>
            </div>
            <div>
                <div className={style.amilin}>
                    <div className={style.amilin_name}>
                        амилин
                    </div>
                    <div className={style.amilin_arrow}></div>
                </div>
                <div className={style.glukon}>
                    <div className={style.glukon_name}>
                        глюкагон
                    </div>
                    <div className={style.glukon_arrow}></div>
                </div>
                <div className={`${style.line} ${style.line_one}`}></div>
                <div className={`${style.line} ${style.line_two}`}></div>
                <div className={`${style.line} ${style.line_three}`}></div>
                <div className={`${style.line} ${style.line_four}`}></div>
                <div className={`${style.line} ${style.line_fife}`}></div>
                <div className={`${style.line} ${style.line_six}`}></div>
                <div className={`${style.line} ${style.line_seven}`}></div>
                <div className={`${style.line} ${style.line_eight}`}></div>
                <div className={`${style.line} ${style.line_nine}`}></div>
                <div className={`${style.line} ${style.line_ten}`}></div>
                <div className={`${style.line} ${style.line_eleven}`}></div>
                <div className={`${style.line} ${style.line_twelve}`}></div>
                <div className={`${style.line} ${style.line_thirteen}`}></div>
                <div className={`${style.line} ${style.line_fourteen}`}></div>
                <div className={`${style.line} ${style.line_fifteen}`}></div>
                <div className={`${style.line} ${style.line_sixteen}`}></div>
                <div className={`${style.line} ${style.line_seventeen}`}></div>
                <div className={`${style.line} ${style.line_eightteen}`}></div>
                <div className={`${style.line} ${style.line_nineteen}`}></div>
                <div className={`${style.line} ${style.line_twenty}`}></div>
                <div className={`${style.line} ${style.line_twenty_one}`}></div>
                <div className={`${style.line} ${style.line_twenty_two}`}></div>
            </div>
        </div>
    )
}


export default SlideThreePartThree


