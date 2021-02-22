import { Achat } from './Achat.model';
import { Borne } from './Borne.model';
import { JoueurAcamedie } from './JoueurAcamedie.model';
import { Parent } from './Parent.model';

export class Transaction {

    public id: number;

    public achats: Achat[];
    public borne: Borne;

    public dateTransaction: string;
    public typeClient: string;

    public nomClient: string;

    public joueur: JoueurAcamedie;
    public parent: Parent;

    public totalApresRemise: number;
    public totalAvantRemise: number;
    public totalRemise: number;

    constructor() { }
}