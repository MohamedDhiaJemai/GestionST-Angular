import { Parent } from './Parent.model';
import { Poste } from './Poste.model';
export class JoueurAcamedie {

    public id: number;
    public identifiant: string;
    public nom: string;
    public prenom: string;
    public dateNaissance: string;
    public sexe: string;
    public dateInscription: Date;
    public dateValidation: Date;
    public validation: boolean;
    public parent: Parent;
    public mobile: string;
    public pin: string;
    public nomJoueur: string;
    public elite: boolean;
    public poste: Poste;

    constructor() {

    }
}
