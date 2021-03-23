import React from 'react';
import style from './SlideOne.module.css'



const ContentItem = ({name}) => {
    return (
        <div className={style.contentItems}>
            <div className={style.itemName}>
                {name}
            </div>
            <div className={style.itemRoundBig}>
                <div className={style.itemRoundMiddle}>
                    <div className={style.itemRoundSmall}></div>
                </div>
            </div>
        </div>
    )
} 


export default ContentItem