import Vacancy from "../model/Vacancy";
import { observable, action, computed } from "mobx";

export default class FavoritesStore {

    @observable
    items: Array<Vacancy> = [];

    @action
    addFavorite(vacancy: Vacancy) {
        if(this.items.find((item: Vacancy) => item == vacancy)) return false;
        this.items.push(vacancy);
    }

    @action
    removeFavorite(vacancy: Vacancy){
        this.items.splice(this.items.indexOf(vacancy), 1)
    }
    
    @computed
    get eliteVacancies(){
        return this.items.filter((item: Vacancy) => item.salary > 60000);
    }


}