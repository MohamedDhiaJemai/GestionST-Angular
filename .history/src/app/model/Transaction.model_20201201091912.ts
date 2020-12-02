import { JoueurAcademieComponent } from app / joueur - academie / joueur - academie.component;
import { Achats } from  ./ Achats.model;
import { Borne } from  ./ Borne.model;
import { JoueurAcamedie } from  ./ JoueurAcamedie.model;
import { Parent } from  ./ Parent.model;

export class Transaction {
    public id: number;
    public achats: Achats;
    public borne: Borne;
    public dateTransaction: string;
    public joueur: JoueurAcamedie;
    public parent: Parent;
    public totalApresRemise: number;
    public totalAvantRemise: number;
    public totalRemise: number;
    public typeClient: string;

    constructor() { }
}