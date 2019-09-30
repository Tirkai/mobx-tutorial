import React, { Component } from 'react'
import VacanciesList from '../VacanciesList/VacanciesList'
import style from './style.module.css'
export default class AppContainer extends Component {
    render() {
        return (
            <>
                <div className={style.appContainer}>
                    <div className={style.paper}>
                        <VacanciesList />
                    </div>
                </div>

            </>

        )
    }
}
