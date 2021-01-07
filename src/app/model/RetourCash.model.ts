import { Borne } from './Borne.model';
import { Transaction } from './Transaction.model';
import { Utilisateur } from './Utilisateur.model';

export class RetourCash {

    public id: string;

    public montant: number;
    public dateCreation: Date;

    public retour: boolean;
    public dateRetour: Date;

    public utilisateur: Utilisateur;

    public borne: Borne;

    public transaction: Transaction;

    constructor() { }
}
