import { Categorie } from './Categorie.model';
import { SaisonSportive } from './SaisonSportive.model';

export class SessionTest {

    public id: number;

    public libelle: string;
    public debutSession: string;
    public finSession: string;
    public categorie: Categorie;

    public debutInscription: string;
    public finInscription: string;

    saisonSportive: SaisonSportive;

    public prix: number;

    constructor() { }
}
