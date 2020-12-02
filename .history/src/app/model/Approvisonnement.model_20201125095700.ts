import { Article } from "./Article.model";
import { Stocks } from "./Stocks.model";

export class Approvisonnement {

    public id: number;
    public article: Article;
    public quantité: number;
    public taille : string;
    constructor() { }
}