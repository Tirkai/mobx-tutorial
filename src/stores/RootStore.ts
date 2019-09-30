import VacanciesStore from "./VacanciesStore";
import FavoritesStore from "./FavoritesStore";

export class RootStore{
    public vacancies: VacanciesStore;
    public favorites: FavoritesStore;

    constructor(){
        this.vacancies = new VacanciesStore();
        this.favorites = new FavoritesStore();
    }
}
export default new RootStore();