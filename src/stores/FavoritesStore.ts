import Vacancy from "../model/Vacancy";
import { observable, action, computed } from "mobx";

export default class FavoritesStore {

    @observable
    items: Array<Vacancy> = [];

    @action
    addFavorite(vacancy: Vacancy) {
        this.items.push(vacancy);
    }

    @action
    removeFavorite(vacancy: Vacancy){
        this.items.splice(this.items.indexOf(vacancy), 1)
    }

}