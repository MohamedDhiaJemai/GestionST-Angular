import { Utilisateur } from "./Utilisateur.model";

export class AppelParams {

    public typeEntrainement: string;
    public natifs: string[];
    public jour: string;
    public sexe: string;
    public utilisateur: Utilisateur;

    constructor() { }

}
