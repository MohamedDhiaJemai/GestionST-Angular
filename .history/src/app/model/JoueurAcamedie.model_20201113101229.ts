import { Parent } from './Parent.model';
export class JoueurAcamedie {

    public id: number;
    public identifiant: string;
    public nom: string;
    public prenom: string;
    
    public dateNaissance: string;
    public dateInscription: Date;
    public dateValidation: string;
    public sexe: string;
    public validation: boolean;
    public parent: Parent;

    constructor() {

    }
}
