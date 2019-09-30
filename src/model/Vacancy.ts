import IVacancyItem from "../interfaces/IVacancyItem";
import { observable } from "mobx";

export default class Vacancy {
    public id: string;
    public name: string;
    public salary: number = 0;

    @observable
    public isFavorite: boolean = false;

    constructor(options: IVacancyItem){
        this.id = options.id;
        this.name = options.name;
        if(options.salary != null){
            if(options.salary.from != null){
                this.salary = options.salary.from;
            }   
        }
    }

    setFavorite(value: boolean){
        this.isFavorite = value;
    }
}