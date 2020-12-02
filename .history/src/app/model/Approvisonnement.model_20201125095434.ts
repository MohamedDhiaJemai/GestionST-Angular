import { Article } from "./Article.model";
import { Stocks } from "./Stocks.model";

export class Approvisonnement {

    public id: number;
    public article: Article;
    public sexe: string;
    public quantite: number;
    public stock: Stocks

    constructor() { }
}