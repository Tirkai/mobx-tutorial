import React, { Component } from 'react'
import style from './style.module.css'
import { inject, observer } from 'mobx-react'
import IStore from '../../interfaces/IStore'
import { computed } from 'mobx'
import Vacancy from '../../model/Vacancy'
import VacancyItem from '../VacancyItem/VacancyItem'
import { Button } from 'antd'
import VacanciesColumn from '../VacanciesColumn/VacanciesColumn'

interface IVacanciesListProps extends IStore { }

@inject('store') @observer
export default class VacanciesList extends Component<IVacanciesListProps> {

    @computed
    get vacanciesStore() {
        return this.props.store!.vacancies;
    }

    @computed
    get favoritesStore() {
        return this.props.store!.favorites;
    }

    componentDidMount() {
        this.vacanciesStore.fetchVacancies();
        console.log('did mount')
    }

    handleAddFavorite = (vacancy: Vacancy) => {
        this.favoritesStore.addFavorite(vacancy);
    }

    handleRemoveFavorite = (vacancy: Vacancy) => {
        this.favoritesStore.removeFavorite(vacancy);
    }

    render() {
        console.log(this.props);


        return (
            <div className={style.vacanciesList}>
                <VacanciesColumn>
                    {this.vacanciesStore.items.map((vacancy: Vacancy) => (
                        <VacancyItem
                            vacancy={vacancy}
                            controls={
                                <React.Fragment>
                                    <Button
                                        type="primary"
                                        onClick={() => this.handleAddFavorite(vacancy)}
                                    >
                                        В избранное
                                    </Button>
                                </React.Fragment>
                            } />
                    ))}
                </VacanciesColumn>
                <VacanciesColumn>
                    {this.favoritesStore.items.map((vacancy: Vacancy) => (
                        <VacancyItem vacancy={vacancy} controls={
                            <React.Fragment>
                                <Button
                                    type="danger"
                                    onClick={() => this.handleRemoveFavorite(vacancy)}
                                >
                                    Удалить
                                </Button>
                            </React.Fragment>
                        } />
                    ))}
                </VacanciesColumn>
                <VacanciesColumn>
                    {this.favoritesStore.eliteVacancies.map((vacancy: Vacancy) => (
                        <VacancyItem
                            vacancy={vacancy}
                            controls={null}
                        />
                    ))}
                </VacanciesColumn>
            </div>
        )
    }
}
