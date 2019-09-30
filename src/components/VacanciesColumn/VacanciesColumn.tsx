import React, { Props } from 'react'
import style from './style.module.css'

interface IVacanciesColumnProps{
    children: JSX.Element | Array<JSX.Element>;
}

const VacanciesColumn = (props: IVacanciesColumnProps) => (
    <div className={style.paper}>
        <div className={style.container}>
            {props.children}
        </div>
    </div>
)
export default VacanciesColumn;