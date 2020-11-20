import { DatePipe } from "@angular/common";
import { Categorie } from "./Categorie.model";

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

    constructor() {

    }
}
