import IVacancyItem from "./IVacancyItem";

interface IReponse{
    error: string;
}

export default interface IVacanciesResponse extends IReponse{
    items: Array<IVacancyItem>
}