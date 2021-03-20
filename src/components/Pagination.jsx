import React from 'react';
import style from './Pagination.module.css'

const Pagination = () => {
    return (
        <div className={style.pagination}>
            <div className={`${style.round} ${style.active}`} id='roundOne'></div>
            <div className={style.round} id='roundTwo'></div>
            <div className={style.round} id='roundThree'></div>
        </div>
    )
}

export default Pagination

