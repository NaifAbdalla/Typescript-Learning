import { HasFormatter } from "../interface/HasFormatter.js"

export class Invoice implements HasFormatter {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount
    }

    format(): string {
        return `${this.client} owes £${this.amount} for ${this.details} `;
    }
}