import React from 'react';
import style from './Organ.module.css'
import stylePartTwo from './Part/SlideThreePartTwo.module.css'
import stylePartThree from './Part/SlideThreePartThree.module.css'


const Organ = ({number, name, img, alt}) => {
    return (
        <div className={`${style.organ} ${stylePartThree.groupOrganWrapper}` }>
            <div className={stylePartThree.organDescrWrap}>
                <div className={`${style.number} ${stylePartTwo.organNumber} ${stylePartThree.organNumber}`}>
                    {number}
                </div>
                <div className={`${style.name} ${stylePartTwo.organName} ${stylePartThree.organName}`}>
                    {name}
                </div>
            </div>
            <div className={`${style.img} ${stylePartTwo.organImg} ${stylePartThree.organImg}`}>
                <img src={img} alt={alt}/>
            </div>
        </div>
    )
}

export default Organ