import React from 'react';
import style from './SlideOne.module.css'



const ContentItem = ({name}) => {
    return (
        <div className={style.content_items}>
            <div className={style.item_name}>
                {name}
            </div>
            <div className={style.item_round_big}>
                <div className={style.item_round_middle}>
                    <div className={style.item_round_small}>
                    </div>
                </div>
            </div>
        </div>
    )
} 


export default ContentItem