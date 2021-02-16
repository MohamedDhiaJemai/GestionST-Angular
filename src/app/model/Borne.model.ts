export class Borne {

    public id: number;
    public capaciteBillets: number;
    public communication: number;
    public counterBillets: number;
    public counterLongueurRuban: number;
    public dateCreation: string;
    public ftpPassword: string;
    public ftpUsername: string;
    public ip: string;
    public longueurRuban: string;
    public maintenance: Boolean;
    public mediaFilename: string;
    public reference: string;
    public seuilMaxBillets: number;
    public seuilMinRuban: number;

    constructor() { }
}
