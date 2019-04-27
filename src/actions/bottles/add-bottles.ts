import { BottleRepository } from "../../repository/bottles";
const httperror = require("http-errors");

export class AddBottles {
    name: string;
    price: number;
    quantity: number;
    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    async execute() {
        try {
            const bottleRepo = new BottleRepository();
            const bottle = await bottleRepo.create(this.name, this.price, this.quantity);
            return bottle;
        } catch (error) {
            throw error;
        }
    }
}