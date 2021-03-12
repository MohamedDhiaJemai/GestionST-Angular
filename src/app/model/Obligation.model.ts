import { Joueur } from './Joueur.model';

export class Obligation {

    public id: number;
    public joueur: Joueur;
    public annee: string;
    public type: string;

    constructor() { }
}
