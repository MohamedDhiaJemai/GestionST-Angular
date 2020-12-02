import { Article } from "./Article.model";

export class Approvisonnement {

    public id: number;

    public quantite: number;
    public taille: string;
    public reference: string;
    public article: Article;

    constructor() { }
}