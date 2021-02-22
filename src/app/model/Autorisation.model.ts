import { Tache } from './Tache.model';

export class AutorisationKey {
    public entityrId: number;
    public tacheId: number;
}

export class Autorisation {

    public id: AutorisationKey
    public tache: Tache;
    public consultation: boolean;
    public edition: boolean;

    constructor() {

    }
}
