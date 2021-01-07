import { Categorie } from './Categorie.model';
import { SessionTest } from './SessionTest.model';

export class InscriptionTest {

    public id: number;

    public identifiant: string;

    public nom: string;
    public prenom: string;
    public dateNaissance: string;
    public sexe: string;
    public mobile: string;
    public categorie: Categorie;

    public code: string;
    public dateInscription: Date;
    public phase1: boolean;
    public phase2: boolean;
    public sessionTest: SessionTest;

    constructor() { }
}
