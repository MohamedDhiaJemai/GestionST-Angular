import { JoueurAcamedie } from './JoueurAcamedie.model';

export class Gratuite {
    public id: number;
    public taux: number;
    public motif: string;
    public joueur: JoueurAcamedie;
    public moisDebut: string;
    public moisFin: string;
    public mois: string[];
    public activation: boolean;
    constructor() { }
}
