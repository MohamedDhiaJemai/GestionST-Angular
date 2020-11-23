import { Stocks } from "./Stocks.model";

export class Approvisonnement {

    public id: number;
    public quantite: number;
    public reference: string;
    public stock: Stocks

    constructor() { }
}