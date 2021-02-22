import { Role } from './Role.model';


export class Utilisateur {

    public id: number;
    public username: string;
    public password: string;
    public nom: string;
    public prenom: string;
    public telephone: string;
    public email: string;
    public roles: Role[];
    public nomUtilisateur: string;

    constructor() { }

}
