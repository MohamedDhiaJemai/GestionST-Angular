import { Borne } from './Borne.model';
import { Utilisateur } from './Utilisateur.model';

export class ArretCaisse {

    public id: number;
    public montantVente: number;
    public montantCaisse: number;
    public montantRetour: number;
    public montantDon: number;

    public borne: Borne;
    public dateArret: string;
    public montantCaisseBorne: number;
    public caissier: Utilisateur;

    constructor() { }
}
