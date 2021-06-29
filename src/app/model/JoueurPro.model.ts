import { Categorie } from './Categorie.model';
import { Poste } from './Poste.model';

export class JoueurPro {

    public id: number;
    public identifiant: string;
    public nom: string;
    public prenom: string;
    public dateNaissance: string;
    public sexe: string;
    public dateInscription: string;
    public cin: string;
    public license: string;

    public categorie: Categorie;

    public poste: Poste;

    constructor() {

    }
}
