export default interface IVacancyItem{
    id: string;
    name: string;
    salary: {
        from: number;
        to: number;
        currency: string;
    }
}