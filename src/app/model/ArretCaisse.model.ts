import { Borne } from './Borne.model';
import { Utilisateur } from './Utilisateur.model';

export class ArretCaisse {

    public id: number;
    public montantCaisse: number;

    public montantVente: number;
    public montantRetour: number;
    public montantDon: number;

    public montantCaisseBorne: number;
    public borne: Borne;

    public dateArret: string;
    public caissier: Utilisateur;

    constructor() { }
}
