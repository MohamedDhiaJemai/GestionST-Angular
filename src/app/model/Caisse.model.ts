import { Borne } from './Borne.model';

export class Caisse {

    public id: number;
    public montantVente: number;
    public montantCaisse: number;
    public montantRetour: number;
    public montantDon: number;

    public borne: Borne;


    constructor() { }
}
