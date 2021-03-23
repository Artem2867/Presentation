import React from 'react';
import style from './Pagination.module.css'

const Pagination = ({pagination}) => {
    return (
        <div className={style.pagination}>
            <div className={`${style.round} ${style.active}`} ref={pagination.roundOne} id='roundOne'></div>
            <div className={style.round} ref={pagination.roundTwo}  id='roundTwo'></div>
            <div className={style.round} ref={pagination.roundThree}  id='roundThree'></div>
        </div>
    )
}

export default Pagination

