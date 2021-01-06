import { JoueurAcamedie } from './JoueurAcamedie.model';
import { Produit } from './produit.model';

export class Achats {

    public id: number;
    public joueur: JoueurAcamedie;
    public jours: string[];
    public mois: string[];

    produit: Produit;
    quantite: number;
    taille: string;
    type: string;

    montantApresRemise: number;
    montantAvantRemise: number;
    montantRemise: number;

    constructor() { }
}