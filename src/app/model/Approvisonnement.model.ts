import { Article } from "./Article.model";
import { Utilisateur } from './Utilisateur.model';

export class Approvisonnement {

    public id: number;
    public reference: string;
    public article: Article;
    public taille: string;
    public quantite: number;
    public observation: string;
    public dateCreation: string;
    public utilisateur: Utilisateur;

    constructor() { }
}