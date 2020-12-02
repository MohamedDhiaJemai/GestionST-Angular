import { Stocks } from "./Stocks.model";

export class Approvisonnement {

    public id: number;
    public libelle: string;
    public sexe: string;
    public quantite: number;
    public stock: Stocks

    constructor() { }
}