import { JoueurAcamedie } from './JoueurAcamedie.model';

export class Achat {

    public id: number;
    public joueur: JoueurAcamedie;
    public jours: string[];
    public mois: string[];

    public quantite: number;
    public taille: string;
    public type: string;

    public montantApresRemise: number;
    public montantAvantRemise: number;
    public montantRemise: number;

    public libelleProduit: string;

    constructor() { }
}
