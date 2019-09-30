import React, { Component } from 'react'
import style from './style.module.css'
import { Button } from 'antd'
import Vacancy from '../../model/Vacancy'
interface IVacancyItemProps {
    vacancy: Vacancy;
    controls: Array<JSX.Element> | JSX.Element | null;
}

export default class VacancyItem extends Component<IVacancyItemProps> {

    render() {
        return (
            <div className={style.vacancyItem}>
                <div className={style.header}>
                    <div className={style.title}>
                        {this.props.vacancy.name}
                    </div>
                    <div className={style.salary}>
                        {this.props.vacancy.salary}
                    </div>

                </div>
                <div className={style.actions}>
                    <div className={style.action}>
                        {this.props.controls && this.props.controls}
                    </div>
                </div>
            </div>
        )
    }
}
