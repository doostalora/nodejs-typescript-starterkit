import Item from "../models/Item";
const httperror = require("http-errors");

export class ItemRepository {

    async create(name: string, price: number, quantity: number) {
        const query = Item.findOne({
            name: name
        });

        return query.then(function (doc) {
            if (doc != undefined)
                throw new httperror(422, "items already exists");
            else {
                const item = new Item({
                    "name": name,
                    "quantity": quantity,
                    "price": price
                });
                return item.save();
            }
        });
    }

   /* async getAll(user_id) {
        let query = Chat.find({
            userId: user_id,
        });
        return query.then(function (chats) {
            return chats;
        })
            .catch(function (error) {
                throw error;
            })
    }*/

}

