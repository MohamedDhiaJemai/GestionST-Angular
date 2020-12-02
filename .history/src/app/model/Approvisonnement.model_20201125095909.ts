import { Article } from "./Article.model";
import { Stocks } from "./Stocks.model";

export class Approvisonnement {

    public id: number;

    public quantité: number;
    public taille: string;

    public article: Article;
    constructor() { }
}