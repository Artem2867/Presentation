import React from 'react';
import style from './SlideThree.module.css'
import {leaveStone, enterStone} from '../../animationLogic/animationLogicStone.js'


const SlideYears = () => {
    return (
        <div className={style.years_progress}>
            <div className={style.line_progress}>
                <div className={style.line_grey}>
                </div>
                <div className={style.line_white} id='line_white'>
                </div>
                <div className={style.stone}>
                    <div onTouchStart={enterStone} onTouchEnd={leaveStone}></div>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.data_item}>
                    1998
                </div>
                <div className={style.data_item}>
                    2009
                </div>
                <div className={style.data_item}>
                    2016
                </div>            
            </div>
        </div>
    )
}


export default SlideYears