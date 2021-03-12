import { Categorie } from './Categorie.model';

export class SessionTest {

    public id: number;

    public libelle: string;
    public debutSession: string;
    public finSession: string;
    public categorie: Categorie;

    public debutInscription: string;
    public finInscription: string;

    public prix: number;

    constructor() { }
}
