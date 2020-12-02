import { Article } from "./Article.model";
export class Approvisonnement {

    public id: number;

    public quantité: number;
    public taille: string;

    public article: Article;

    constructor() { }
}