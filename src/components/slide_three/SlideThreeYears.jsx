import React, { useRef } from 'react';
import style from './SlideThree.module.css'
import {leaveStone, enterStone} from '../../animationLogic/animationLogicStone.js'


const SlideYears = ({yearcSlideConteiner}) => {
    const lineWhite = useRef()
    return (
        <div className={style.yearsProgress}>
            <div className={style.lineProgress}>
                <div className={style.lineGrey}>
                </div>
                <div className={style.lineWhite} ref={lineWhite}>
                </div>
                <div className={style.stone}>
                    <div onTouchStart={(e) => enterStone(e, yearcSlideConteiner, lineWhite)} onTouchEnd={(e) => leaveStone(e, lineWhite)}></div>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.dataItem}>
                    1998
                </div>
                <div className={style.dataItem}>
                    2009
                </div>
                <div className={style.dataItem}>
                    2016
                </div>            
            </div>
        </div>
    )
}


export default SlideYears