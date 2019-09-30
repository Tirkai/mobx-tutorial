import Vacancy from "../model/Vacancy";
import { observable, action } from 'mobx'
import Axios from 'axios'
import IVacanciesResponse from "../interfaces/IVacanciesResponse";
import IVacancyItem from "../interfaces/IVacancyItem";

export default class VacanciesStore{
    @observable
    items: Array<Vacancy> = [];

    @action
    async fetchVacancies(){
        const response = await Axios.get<IVacanciesResponse>("https://api.hh.ru/vacancies/?area=43&employer_id=117187");
        this.items = response.data.items.map((item: IVacancyItem) => new Vacancy(item));
    }
}