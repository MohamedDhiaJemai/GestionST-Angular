import { Stocks } from "./Stocks.model";

export class Article {

    public id: number;
    public libelle: string;
    public prix: number;
    public quantite: number;
    public sexe: string;
    public visible: boolean;
    public stocks: Stocks;

    constructor() { }

}
