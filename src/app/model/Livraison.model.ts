import { Article } from './Article.model';
import { Utilisateur } from './Utilisateur.model';

export class Livraison {

    public id: number;
    public article: Article;
    public taille: string;
    public quantite: number;
    public validation: boolean;
    public dateValidation: Date;
    public dateCreation: Date;
    public cloture: boolean;
    public utilisateur: Utilisateur;

    constructor() { }
}
