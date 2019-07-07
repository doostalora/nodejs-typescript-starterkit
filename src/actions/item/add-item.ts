import { ItemRepository } from "../../repository/items";
const httperror = require("http-errors");

export class AddItem {
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
            const itemRepo = new ItemRepository();
            const item = await itemRepo.create(this.name, this.price, this.quantity);
            return item;
        } catch (error) {
            throw error;
        }
    }
}