import { Borne } from './Borne.model';

export class TransactionSearch {

    public id: number;
    public dateTransactionDebut: string;
    public dateTransactionFin: string;
    public borne: Borne;
    public typeClient: string;
    public nomClient: string;

    constructor() { }
}
