import React from 'react';
import style from './Organ.module.css'
import stylePartTwo from './Part/SlideThreePartTwo.module.css'
import stylePartThree from './Part/SlideThreePartThree.module.css'


const Organ = ({number, name, img, alt}) => {
    return (
        <div className={`${style.organ} ${stylePartThree.group_organ_wrapper}` }>
            <div className={stylePartThree.organ_descr_wrap}>
                <div className={`${style.number} ${stylePartTwo.organ_number} ${stylePartThree.organ_number}`}>
                    {number}
                </div>
                <div className={`${style.name} ${stylePartTwo.organ_name} ${stylePartThree.organ_name}`}>
                    {name}
                </div>
            </div>
            <div className={`${style.img} ${stylePartTwo.organ_img} ${stylePartThree.organ_img}`}>
                <img src={img} alt={alt}/>
            </div>
        </div>
    )
}

export default Organ