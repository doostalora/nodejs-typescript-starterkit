import Bottle from "../models/Bottle";
const httperror = require("http-errors");

export class BottleRepository {

    async create(name: string, price: number, quantity: number) {
        const query = Bottle.findOne({
            name: name
        });

        return query.then(function (doc) {
            if (doc != undefined)
                throw new httperror(422, "bottles already exists");
            else {
                const bottle = new Bottle({
                    "name": name,
                    "quantity": quantity,
                    "price": price
                });
                return bottle.save();
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

